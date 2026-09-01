import type {Middleware} from "openapi-fetch";
import {localStorageKeys} from "../config";
import {makeRefreshToken} from "./refresh-token";

export const authMiddleware: Middleware = {
    async onRequest({request}) {
        const accessToken = localStorage.getItem(localStorageKeys.accessToken);

        if (accessToken) {
            request.headers.set("Authorization", "Bearer " + accessToken);
        }

        // @ts-expect-error hot fix for request retry clone
        request._retryRequest = request.clone();

        return request;
    },
    async onResponse({request, response}) {
        if (response.ok) return response;

        if (response.status !== 401) {
            const errorBody = await response.json();
            throw errorBody;
        }

        try {
            await makeRefreshToken();

            // @ts-expect-error ignore it
            const originalRequest: Request = request._retryRequest;
            const retryRequest = new Request(originalRequest, {
                headers: new Headers(originalRequest.headers)
            });

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