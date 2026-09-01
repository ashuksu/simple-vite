import {DeletePlaylist} from "../../../features/playlists/delete-playlist"

type Props = {
    id: string
    title: string
    isEditable?: boolean
    onSelect?: (id: string) => void
    onDelete?: (id: string) => void
}

export const PlaylistItem = ({id, title, isEditable = false, onSelect, onDelete}: Props) => {
    return (
        <li className="flex items-center gap-1">
            {isEditable ? (
                <>
                    <span
                        className="cursor-pointer hover:underline"
                        onClick={() => onSelect?.(id)}
                    >
                        {title}
                    </span>
                    <DeletePlaylist
                        playlistId={id}
                        onDeleted={(deletedId) => onDelete?.(deletedId)}
                    />
                </>
            ) : (
                <span>{title}</span>
            )}
        </li>
    )
}