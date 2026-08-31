import {type Path, useForm} from 'react-hook-form'
import type {SchemaCreatePlaylistRequestPayload} from "../../../../shared/lib/schema.ts";
import {useAddPlaylistMutation} from "../model/use-add-playlist-mutation.ts";
import {isJsonApiErrorDocument, parseJsonApiErrors} from "../../../../shared/util/json-api-error.ts";

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
            if (isJsonApiErrorDocument(error)) {
                const {fieldErrors, globalErrors} = parseJsonApiErrors(error)

                for (const [field, message] of Object.entries(fieldErrors)) {
                    const fieldPath = `data.attributes.${field}` as Path<SchemaCreatePlaylistRequestPayload>
                    setError(fieldPath, {type: 'server', message})
                }

                if (globalErrors.length > 0) {
                    setError('root.server', {
                        type: 'server',
                        message: globalErrors.join('\n')
                    })
                }
            }
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
                        placeholder="Playlist Name"
                        required/>
                </label>
                {errors.data?.attributes?.title && (
                    <p className="text-red-500 mt-1 wrap-break-word">
                        {errors.data.attributes.title.message}
                    </p>
                )}
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
                {errors.data?.attributes?.description && (
                    <p className="text-red-500 mt-1 wrap-break-word">
                        {errors.data.attributes.description.message}
                    </p>
                )}
            </div>
            <div>
                <button
                    className='button button--md w-full'
                    type="submit">
                    Add Playlist
                </button>
                {errors.root?.server && (
                    <p className="text-red-500 mt-1 wrap-break-word">
                        {errors.root.server.message}
                    </p>
                )}
            </div>
        </form>
    )
}