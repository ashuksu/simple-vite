import {createFileRoute} from '@tanstack/react-router'
import {NotFoundPage} from "../../ui/pages/NotFoundPage.tsx";

export const Route = createFileRoute('/404')({
    head: () => ({
        meta: [{
            title: 'Not Found Page',
        }]
    }),
    component: NotFoundPage,
})