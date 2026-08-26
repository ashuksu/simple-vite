import createClient, {type Middleware} from "openapi-fetch";
import type {paths} from "./schema.ts";
import {API_KEY, API_URL} from "../../config.ts";

const headers: HeadersInit = API_KEY ? {'api-key': API_KEY} : {};

// mutex
let refreshPromise: Promise<void> | null = null;

function makeRefreshToken() {
    if (!refreshPromise) {
        refreshPromise = (async (): Promise<void> => {
            const refreshToken = localStorage.getItem('oauth-refresh-token');
            if (!refreshToken) throw new Error('No refresh token');

            const response = await fetch(API_URL + 'auth/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'API-KEY': API_KEY,
                },
                body: JSON.stringify({
                    refreshToken: refreshToken,
                }),
            })

            if (!response) {
                localStorage.removeItem('oauth-refresh-token')
                localStorage.removeItem('oauth-access-token')
                throw new Error('Refresh token failed');
            }

            const data = await response.json();
            localStorage.setItem('oauth-refresh-token', data.refreshToken)
            localStorage.setItem('oauth-access-token', data.accessToken)
        })()

        refreshPromise.finally(() => {
            refreshPromise = null;
        })

        return refreshPromise;
    }
}

const authMiddleware: Middleware = {
    async onRequest({request}) {
        const accessToken = localStorage.getItem('oauth-access-token');

        if (accessToken) {
            request.headers.set("Authorization", "Bearer " + accessToken);
        }

        // @ts-expect-error hot fix
        request._retryRequest = request.clone();

        return request;
    },
    async onResponse({response}) {
        if (response.ok) return response;

        if (!response.ok && response.status !== 401) {
            throw new Error(`${response.url}: ${response.status} ${response.statusText}`)
            // console.warn(`[API Warning] ${response.status} ${response.statusText} at ${response.url}`);
        }

        try {
            await makeRefreshToken();

            // @ts-expect-error ignore it
            const originalRequest: Request = request._retryRequest;
            const retryRequest = new Request(originalRequest, {headers: new Headers(originalRequest.headers)})
            retryRequest.headers.set("Authorization", "Bearer " + localStorage.getItem('oauth-access-token'));
            return await fetch(retryRequest);
        } catch {
            return response;
        }
    }
};

export const client = createClient<paths>({
    baseUrl: API_URL,
    headers: headers
});

client.use(authMiddleware);