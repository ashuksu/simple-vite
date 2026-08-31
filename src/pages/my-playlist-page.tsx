import {Playlists} from "../widgets/playlists/ui/playlists.tsx";
import {useMeQuery} from "../features/auth/model/use-me-query.ts";
import {Navigate} from "@tanstack/react-router";
import {AddPlaylistForm} from "../features/playlists/add-playlist/ui/add-playlist-form.tsx";
import {EditPlaylistForm} from "../features/playlists/edit-playlist/ui/edit-playlist-form.tsx";
import {useState} from "react";

export function MyPlaylistPage() {
    const {data, isPending} = useMeQuery();
    const [editingPlayListId, setEditingPlayListId] = useState<string | null>(null);

    const handlePlaylistDelete = (playlistId: string) => {
        if (editingPlayListId === playlistId) {
            setEditingPlayListId(null);
        }
    };

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
            <div className="flex flex-col gap-5">
                <AddPlaylistForm/>
                <Playlists
                    userId={data.userId}
                    onPlaylistSelected={(playlistId) => {
                        setEditingPlayListId(playlistId)
                    }}
                    onPlaylistDeleted={handlePlaylistDelete}/>
                <EditPlaylistForm
                    playlistId={editingPlayListId}
                    onCancelEditing={() => {
                        setEditingPlayListId(null)
                    }}/>
            </div>
        </div>
    )
}