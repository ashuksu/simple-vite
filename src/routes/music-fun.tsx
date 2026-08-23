import {createFileRoute} from '@tanstack/react-router'
import {MusicFunPage} from "../ui/pages/MusicFunPage.tsx";

export const Route = createFileRoute('/music-fun')({
    component: MusicFunPage,
})