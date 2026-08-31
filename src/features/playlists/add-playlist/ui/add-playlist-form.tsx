import {useForm} from 'react-hook-form'
import type {SchemaCreatePlaylistRequestPayload} from "../../../../shared/lib/schema.ts";
import {useAddPlaylistMutation} from "../model/use-add-playlist-mutation.ts";

export const AddPlaylistForm = () => {
    const {register, handleSubmit} = useForm<SchemaCreatePlaylistRequestPayload>();
    const {mutate} = useAddPlaylistMutation()

    const onSubmit = (data: SchemaCreatePlaylistRequestPayload) => {
        mutate(data)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='form max-w-md border rounded p-4'>
            <input type="hidden" value="playlists" {...register('data.type')} />
            <h3 className='m-0'>Add New Playlist</h3>
            <label
                className='input-block'>
                <span>Playlist Name</span>
                <input
                    {...register('data.attributes.title')}
                    className="input"
                    type="text"
                    placeholder="Playlist Name"/>
            </label>
            <label
                className='input-block'>
                <span>Playlist Description</span>
                <textarea
                    {...register('data.attributes.description')}
                    className="input"
                    placeholder="Playlist Description"/>
            </label>
            <button
                className='button button--md w-full'
                type="submit">
                Add Playlist
            </button>
        </form>
    )
}