import {type Path, useForm} from 'react-hook-form';
import type {SchemaUpdatePlaylistRequestPayload} from "../../../../shared/lib/schema.ts";
import {useEffect} from "react";
import {usePlaylistQuery} from "../model/use-playlist-query.ts";
import {useUpdatePlaylistMutation} from "../model/use-update-playlist-mutation.ts";
import {isJsonApiErrorDocument, parseJsonApiErrors} from "../../../../shared/util/json-api-error.ts";

type Props = {
    playlistId: string | null
    onCancelEditing: () => void
}

export const EditPlaylistForm = ({playlistId, onCancelEditing}: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: {errors},
    } = useForm<SchemaUpdatePlaylistRequestPayload>();

    const {data, isPending, isError} = usePlaylistQuery(playlistId);

    useEffect(() => {
        if (data?.data) {
            reset({
                data: {
                    type: 'playlists',
                    attributes: {
                        title: data.data.attributes.title,
                        description: data.data.attributes.description ?? '',
                    },
                },
            });
        }
    }, [data, playlistId, reset]);

    const {mutateAsync} = useUpdatePlaylistMutation({
        onSuccess: () => {
            onCancelEditing();
        }
    });

    const onSubmit = async (formData: SchemaUpdatePlaylistRequestPayload) => {
        try {
            await mutateAsync({...formData, playlistId: playlistId!});
        } catch (error) {
            if (isJsonApiErrorDocument(error)) {
                const {fieldErrors, globalErrors} = parseJsonApiErrors(error);

                for (const [field, message] of Object.entries(fieldErrors)) {
                    const fieldPath = `data.attributes.${field}` as Path<SchemaUpdatePlaylistRequestPayload>;
                    setError(fieldPath, {type: 'server', message});
                }

                if (globalErrors.length > 0) {
                    setError('root.server', {
                        type: 'server',
                        message: globalErrors.join('\n'),
                    });
                }
            }
        }
    };

    if (!playlistId) return null;
    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error loading playlist</div>;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='form max-w-md border rounded p-4 flex flex-col gap-4'>
            <input type="hidden" value="playlists" {...register('data.type')} />
            <h3 className='m-0'>Edit Playlist</h3>
            <div>
                <label
                    className='input-block'>
                    <span>Playlist Name *</span>
                    <input
                        {...register('data.attributes.title')}
                        defaultValue={data?.data.attributes.title}
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
                        defaultValue={data?.data.attributes.description ?? ''}
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
                {errors.root?.server && (
                    <p className="text-red-500 mt-1 wrap-break-word">
                        {errors.root.server.message}
                    </p>
                )}
            </div>
        </form>
    )
}