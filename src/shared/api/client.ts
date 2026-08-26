import createClient, {type Middleware} from "openapi-fetch";
import type {paths} from "./schema.ts";
import {API_KEY, API_URL} from "../../config.ts";

const headers: HeadersInit = API_KEY ? {'api-key': API_KEY} : {};

const authMiddleware: Middleware = {
    async onRequest({request}) {
        const accessToken = localStorage.getItem('oauth-access-token');

        if (accessToken) {
            request.headers.set("Authorization", "Bearer " + accessToken);
        }
        return request;
    },
    async onResponse({response}) {
        if (!response.ok) {
            throw new Error(`${response.url}: ${response.status} ${response.statusText}`)
            // console.warn(`[API Warning] ${response.status} ${response.statusText} at ${response.url}`);
        }
    }
};

export const client = createClient<paths>({
    baseUrl: API_URL,
    headers: headers
});

client.use(authMiddleware);