import {createFileRoute} from '@tanstack/react-router'
import {MainPage} from "../ui/pages/MainPage.tsx";
// | Simple Vite + React, TS, TanStack Query|Router,TailwindCSS
export const Route = createFileRoute('/')({
    head: () => ({
        meta: [{
            title: 'Main Page',
        }]
    }),
    component: MainPage,
})

