import {useState} from "react"
import {Pagination} from "../../pagination"
import usePlaylistsQuery from "../../../entities/playlist/api/use-playlists-query"
import {PlaylistSearch} from "./playlist-search";
import {PlaylistItem} from "./playlist-item";

type Props = {
    userId?: string
    onPlaylistSelected?: (playlistId: string) => void
    onPlaylistDeleted?: (playlistId: string) => void
    isSearchActive?: boolean
}

export const Playlists = ({userId, onPlaylistSelected, onPlaylistDeleted, isSearchActive = false}: Props) => {
    const [pageNumber, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const query = usePlaylistsQuery(userId, {search, pageNumber})

    const handleSearchChange = (value: string) => {
        setSearch(value)
        setPage(1)
    }

    if (query.isPending) return <div>Loading...</div>
    if (query.isError || !query.data) return <div>Error: {JSON.stringify(query.error?.message)}</div>

    return (
        <div className="flex flex-col gap-3 max-w-md">
            {isSearchActive && (
                <PlaylistSearch
                    value={search}
                    onChange={handleSearchChange}
                />
            )}

            <Pagination
                pagesCount={query.data.meta.pagesCount}
                current={pageNumber}
                changePageNumber={setPage}
                isFetching={query.isFetching}
            />

            <ul className="flex flex-col gap-2">
                {query.data.data.map((playlist) => {
                    const isMyPlaylist = Boolean(userId);

                    return (
                        <PlaylistItem
                            key={playlist.id}
                            id={playlist.id}
                            title={playlist.attributes.title}
                            isEditable={isMyPlaylist}
                            onSelect={(id) => onPlaylistSelected?.(id)}
                            onDelete={(id) => onPlaylistDeleted?.(id)}
                        />
                    )
                })}
            </ul>
        </div>
    )
}