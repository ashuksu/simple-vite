import {Pagination} from "../../pagination/ui/pagination.tsx";
import {useState} from "react";
import {DeletePlaylist} from "../../../features/playlists/delete-playlist/ui/delete-playlist.tsx";
import usePlaylistsQuery from "../api/use-playlists-query.ts";

type Props = {
    userId?: string
    onPlaylistSelected?: (playlistId: string) => void
    isSearchActive?: boolean
}
export const Playlists = ({userId, onPlaylistSelected, isSearchActive = false}: Props) => {
    const [pageNumber, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const query = usePlaylistsQuery(userId, {search, pageNumber})

    const handlePlaylistSelectedClick = (playlistId: string) => {
        onPlaylistSelected?.(playlistId);
    }

    if (query.isPending) return <div>Loading...</div>;
    if (query.isError || !query.data) return <div>Error: {JSON.stringify(query.error?.message)}</div>;

    return (
        <div className='flex flex-col gap-3 max-w-md'>
            {isSearchActive && <input
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                }}
                type="text"
                placeholder="Search..."
                className="input max-w-md"
            />}
            <Pagination
                pagesCount={query.data.meta.pagesCount}
                current={pageNumber} // query.data.meta.page
                changePageNumber={setPage}
                isFetching={query.isFetching}
            />
            <ul className="flex flex-col gap-2">
                {query.data.data.map((playlist) => (
                    <li
                        onClick={() => handlePlaylistSelectedClick(playlist.id)}
                        className='flex items-center gap-1'
                        key={playlist.id}>
                        {playlist.attributes.title} <DeletePlaylist playlistId={playlist.id}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}