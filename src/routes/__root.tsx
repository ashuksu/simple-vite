import {createRootRoute} from '@tanstack/react-router'
import {RootLayout} from "../ui/layouts/RootLayout.tsx";
import {NotFoundPage} from "../ui/pages/NotFoundPage.tsx";

export const Route = createRootRoute({
    component: RootLayout,
    notFoundComponent: NotFoundPage,
})