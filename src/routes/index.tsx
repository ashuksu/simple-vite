import {createFileRoute} from '@tanstack/react-router'
import {MainPage} from "../ui/pages/MainPage.tsx";

export const Route = createFileRoute('/')({
    component: MainPage,
})

