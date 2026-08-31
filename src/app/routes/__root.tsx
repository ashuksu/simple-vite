import {createRootRoute} from '@tanstack/react-router'
import {RootLayout} from "../layouts/root-layout.tsx";
import {NotFoundPage} from "../../pages/not-found";

export const Route = createRootRoute({
    component: RootLayout,
    notFoundComponent: NotFoundPage,
})