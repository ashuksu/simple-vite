import {API_KEY, API_URL, localStorageKeys} from "../config";

let refreshPromise: Promise<void> | null = null;

export function makeRefreshToken() {
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
            });

            if (!response.ok) {
                localStorage.removeItem(localStorageKeys.refreshToken);
                localStorage.removeItem(localStorageKeys.accessToken);
                throw new Error('Refresh token failed');
            }

            const data = await response.json();
            localStorage.setItem(localStorageKeys.refreshToken, data.refreshToken);
            localStorage.setItem(localStorageKeys.accessToken, data.accessToken);
        })().finally(() => {
            refreshPromise = null;
        });
    }

    return refreshPromise;
}