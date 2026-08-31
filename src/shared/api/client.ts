import createClient, {type Middleware} from "openapi-fetch";
import {API_KEY, API_URL, localStorageKeys} from "../config";
import type {paths} from "../lib";

const headers: HeadersInit = API_KEY ? {'api-key': API_KEY} : {};

// mutex
let refreshPromise: Promise<void> | null = null;

function makeRefreshToken() {
    if (!refreshPromise) {
        refreshPromise = (async (): Promise<void> => {
            const refreshToken = localStorage.getItem(localStorageKeys.refreshToken);
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

            if (!response.ok) {
                localStorage.removeItem(localStorageKeys.refreshToken)
                localStorage.removeItem(localStorageKeys.accessToken)
                throw new Error('Refresh token failed');
            }

            const data = await response.json();
            localStorage.setItem(localStorageKeys.refreshToken, data.refreshToken)
            localStorage.setItem(localStorageKeys.accessToken, data.accessToken)
        })()

        refreshPromise.finally(() => {
            refreshPromise = null;
        })

        return refreshPromise;
    }
}

const authMiddleware: Middleware = {
    async onRequest({request}) {
        const accessToken = localStorage.getItem(localStorageKeys.accessToken);

        if (accessToken) {
            request.headers.set("Authorization", "Bearer " + accessToken);
        }

        // @ts-expect-error hot fix
        request._retryRequest = request.clone();

        return request;
    },
    async onResponse({request, response}) {
        if (response.ok) return response;

        if (!response.ok && response.status !== 401) {
            const errorBody = await response.json()
            throw errorBody
        }

        try {
            await makeRefreshToken();

            // @ts-expect-error ignore it
            const originalRequest: Request = request._retryRequest;
            const retryRequest = new Request(originalRequest, {
                headers: new Headers(originalRequest.headers)
            })
            retryRequest.headers.set(
                "Authorization",
                "Bearer " + localStorage.getItem(localStorageKeys.accessToken)
            );
            return fetch(retryRequest);
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