import {useDeleteMutation} from "../model/use-delete-mutation.tsx";
import {Close} from "../../../../shared/ui/close.tsx";

type Props = {
    playlistId: string
    onDeleted: (playlistId: string) => void
}

export const DeletePlaylist = ({playlistId, onDeleted}: Props) => {
    const {mutate} = useDeleteMutation();

    const handleDeleteClick = () => {
        mutate(playlistId);
        onDeleted?.(playlistId);
    }

    return (
        <button
            className='flex items-center justify-center'
            onClick={handleDeleteClick}>
            <Close/>
        </button>
    )
}

