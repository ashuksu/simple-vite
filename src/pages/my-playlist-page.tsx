import {Playlists} from "../features/playlists.tsx";
import {useMeQuery} from "../features/auth/model/use-me-query.ts";
import {Navigate} from "@tanstack/react-router";

export function MyPlaylistPage() {
    const {data, isPending} = useMeQuery();

    if (isPending) {
        return (
            <div className="container">
                <h2>My Playlist!</h2>
                <span>Loading...</span>
            </div>
        )
    }

    if (!data) {
        return <Navigate to="/" replace/>
    }

    return (
        <div className="container">
            <h2>My Playlist!</h2>
            <Playlists userId={data.userId}/>
        </div>
    )
}