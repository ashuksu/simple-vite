import {createFileRoute} from '@tanstack/react-router'
import {AboutPage} from "../ui/pages/AboutPage.tsx";

export const Route = createFileRoute('/about')({
    component: AboutPage,
})