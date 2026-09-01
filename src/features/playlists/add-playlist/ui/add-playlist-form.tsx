import {useForm} from 'react-hook-form'
import {useAddPlaylistMutation} from "../model/use-add-playlist-mutation.ts";
import {
    type JsonApiErrorDocument,
    queryErrorHandlerForRHFFactory,
    type SchemaCreatePlaylistRequestPayload
} from "../../../../shared/lib";
import {FormFieldError} from "../../../../shared/ui";

export const AddPlaylistForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: {errors}
    } = useForm<SchemaCreatePlaylistRequestPayload>();
    const {mutateAsync} = useAddPlaylistMutation()

    const onSubmit = async (data: SchemaCreatePlaylistRequestPayload) => {
        try {
            await mutateAsync(data)
            reset()
        } catch (error) {
            queryErrorHandlerForRHFFactory({setError})(error as unknown as JsonApiErrorDocument)
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='form max-w-md border rounded p-4'>
            <input type="hidden" value="playlists" {...register('data.type')} />
            <h3 className='m-0'>Add New Playlist</h3>
            <div>
                <label
                    className='input-block'>
                    <span>Playlist Name *</span>
                    <input
                        {...register('data.attributes.title')}
                        className="input"
                        type="text"
                        placeholder="Playlist Name"/>
                </label>
                <FormFieldError message={errors.data?.attributes?.title?.message}/>
            </div>
            <div>
                <label
                    className='input-block'>
                    <span>Playlist Description</span>
                    <textarea
                        {...register('data.attributes.description')}
                        className="input"
                        placeholder="Playlist Description"/>
                </label>
                <FormFieldError message={errors.data?.attributes?.description?.message}/>
            </div>
            <div>
                <button
                    className='button button--md w-full'
                    type="submit">
                    Add Playlist
                </button>
                <FormFieldError message={errors.root?.server?.message}/>
            </div>
        </form>
    )
}