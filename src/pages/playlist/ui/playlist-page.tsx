import {Playlists} from "../../../widgets/playlists";

export function PlaylistPage() {
    return (
        <div className="container">
            <h2>Hello from Playlist!</h2>
            <Playlists isSearchActive={true}/>
        </div>
    )
}