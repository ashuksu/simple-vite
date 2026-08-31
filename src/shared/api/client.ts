import createClient from "openapi-fetch";
import type {paths} from "../lib";
import {API_KEY, API_URL} from "../config";
import {authMiddleware} from "./auth-middleware";

const headers: HeadersInit = API_KEY ? {'api-key': API_KEY} : {};

export const client = createClient<paths>({
    baseUrl: API_URL,
    headers: headers
});

client.use(authMiddleware);