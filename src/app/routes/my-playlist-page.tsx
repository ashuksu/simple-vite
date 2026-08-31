import {createFileRoute} from '@tanstack/react-router'
import {MyPlaylistPage} from "../../pages/my-playlist";

export const Route = createFileRoute('/my-playlist-page')({
    head: () => ({
        meta: [
            {title: 'My Playlist | My App'},
        ],
    }),
    component: MyPlaylistPage,
})