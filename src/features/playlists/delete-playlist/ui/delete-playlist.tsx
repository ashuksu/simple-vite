import {useDeleteMutation} from "../model/use-delete-mutation.tsx";
import {Close} from "../../../../shared/ui/close.tsx";

type Props = {
    playlistId: string
}

export const DeletePlaylist = ({playlistId}: Props) => {
    const {mutate} = useDeleteMutation();

    const handleDeleteClick = () => {
        mutate(playlistId);
    }

    return (
        <button
            className='flex items-center justify-center'
            onClick={handleDeleteClick}>
            <Close/>
        </button>
    )
}

