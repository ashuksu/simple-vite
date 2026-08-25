import {createFileRoute} from '@tanstack/react-router'
import {MusicFunPage} from "../../pages/music-fun-page.tsx";

export const Route = createFileRoute('/music-fun')({
    head: () => ({
        meta: [{
            title: 'Music Fun Page',
        }]
    }),
    component: MusicFunPage,
})