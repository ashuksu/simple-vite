// Register the router instance for type safety
import {createRouter} from "@tanstack/react-router";
import {routeTree} from "../../routeTree.gen.ts";

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
export const router = createRouter({
    routeTree,
    basepath: import.meta.env.BASE_URL,
})