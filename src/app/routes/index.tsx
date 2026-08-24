import {createFileRoute} from '@tanstack/react-router'
import {MainPage} from "../../ui/pages/MainPage.tsx";

export const Route = createFileRoute('/')({
    head: () => ({
        meta: [{
            title: 'Main Page',
        }]
    }),
    component: MainPage,
})

