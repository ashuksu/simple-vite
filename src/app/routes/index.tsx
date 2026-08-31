import {createFileRoute} from '@tanstack/react-router'
import {PlaylistPage} from "../../pages/playlist/ui/playlist-page.tsx";

export const Route = createFileRoute('/')({
    head: () => ({
        meta: [{
            title: 'Playlist Page',
        }]
    }),
    component: PlaylistPage,
})

