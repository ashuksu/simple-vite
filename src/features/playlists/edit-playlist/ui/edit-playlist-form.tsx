import {useForm} from 'react-hook-form'
import type {SchemaUpdatePlaylistRequestPayload} from "../../../../shared/lib/schema.ts";
import {useEffect} from "react";
import {usePlaylistQuery} from "../model/use-playlist-query.ts";
import {useUpdatePlaylistMutation} from "../model/use-update-playlist-mutation.ts";

type Props = {
    playlistId: string | null
    onCancelEditing: () => void
}

export const EditPlaylistForm = ({playlistId, onCancelEditing}: Props) => {
    const {register, handleSubmit, reset} = useForm<SchemaUpdatePlaylistRequestPayload>();

    useEffect(() => {
        reset();
    }, [playlistId, reset]);

    const {data, isPending, isError} = usePlaylistQuery(playlistId);
    const {mutate} = useUpdatePlaylistMutation();

    const onSubmit = (data: SchemaUpdatePlaylistRequestPayload) => {
        mutate({...data, playlistId: playlistId!})
    }

    if (!playlistId) return <></>;
    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error loading playlist</div>;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='form max-w-md border rounded p-4'>
            <input type="hidden" value="playlists" {...register('data.type')} />
            <h3 className='m-0'>Edit Playlist</h3>
            <label
                className='input-block'>
                <span>Playlist Name</span>
                <input
                    {...register('data.attributes.title')}
                    defaultValue={data?.data.attributes.title}
                    className="input"
                    type="text"
                    placeholder="Playlist Name"/>
            </label>
            <label
                className='input-block'>
                <span>Playlist Description</span>
                <textarea
                    {...register('data.attributes.description')}
                    defaultValue={data?.data.attributes.description ?? ''}
                    className="input"
                    placeholder="Playlist Description"/>
            </label>
            <div className='grid grid-cols-2 gap-4'>
                <button
                    className='button button--accent button--md'
                    onClick={onCancelEditing}
                    type="reset">
                    Cancel
                </button>
                <button
                    className='button button--md'
                    type="submit">
                    Save Playlist
                </button>
            </div>
        </form>
    )
}