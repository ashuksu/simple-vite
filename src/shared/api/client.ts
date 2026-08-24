import createClient from "openapi-fetch";
import type {paths} from "./schema.ts";
import {API_KEY, API_URL} from "../../config.ts";

const headers: HeadersInit = API_KEY ? {'api-key': API_KEY} : {};

export const client = createClient<paths>({
    baseUrl: API_URL,
    headers: headers
});
