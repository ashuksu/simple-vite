import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import {useForm} from 'react-hook-form'
import {client} from "../../../../shared/api/client"
import type {SchemaGetPlaylistsOutput, SchemaUpdatePlaylistRequestPayload} from "../../../../shared/lib/schema.ts";
import {useEffect} from "react";
import {useMeQuery} from "../../../auth/model/use-me-query.ts";

type Props = {
    playlistId: string | null
}

export const EditPlaylistForm = ({playlistId}: Props) => {
    const {register, handleSubmit, reset} = useForm<SchemaUpdatePlaylistRequestPayload>();

    const {data: meData} = useMeQuery();

    useEffect(() => {
        reset();
    }, [playlistId, reset]);

    const {data, isPending, isError} = useQuery({
        queryKey: ['playlists', 'details', playlistId],
        queryFn: async () => {
            const {data} = await client.GET('/playlists/{playlistId}', {
                params: {
                    path: {playlistId: playlistId!}
                }
            })

            return data!;
        },
        enabled: !!playlistId,
    })

    const queryClient = useQueryClient()

    const key = ['playlists', 'my', meData!.userId]

    const {mutate} = useMutation({
        mutationFn: async (data: SchemaUpdatePlaylistRequestPayload) => {
            const response = await client.PUT('/playlists/{playlistId}', {
                params: {
                    path: {playlistId: playlistId!}
                },
                body: {
                    ...data,
                    data: {
                        ...data.data,
                        attributes: {
                            ...data.data.attributes,
                            tagIds: [],
                        }
                    }
                }
            })

            return response.data;
        },
        onMutate: async (data: SchemaUpdatePlaylistRequestPayload, context) => {
            // Cancel any outgoing refetches
            // (so they don't overwrite our optimistic update)
            await context.client.cancelQueries({queryKey: ['playlists']})

            // Snapshot the previous value
            const previousMyPlatLists = context.client.getQueryData(key)

            // Optimistically update to the new value
            context.client.setQueryData(key, (oldData: SchemaGetPlaylistsOutput) => {
                return {
                    ...oldData,
                    data: oldData.data.map(p => {
                        if (p.id === playlistId) {
                            return {
                                ...p,
                                attributes: {
                                    ...p.attributes,
                                    description: data.data.attributes.description,
                                    title: data.data.attributes.title,
                                }
                            }
                        } else {
                            return p;
                        }
                    })
                }
            })

            // Return a result with the previous and new todo
            return {previousMyPlatLists}
        },
        // If the mutation fails, use the result we returned above
        onError: (_, __: SchemaUpdatePlaylistRequestPayload, onMutateResult, context) => {
            context.client.setQueryData(
                key,
                onMutateResult!.previousMyPlatLists,
            )
        },
        // Always refetch after error or success:
        onSettled: () =>
            // context.client.invalidateQueries({queryKey: ['todos', newTodo.id]}),
            queryClient.invalidateQueries({
                queryKey: ['playlists'],
                refetchType: 'all'
            })
    })

    const onSubmit = (data: SchemaUpdatePlaylistRequestPayload) => {
        mutate(data)
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
            <button
                className='button button--md w-full'
                type="submit">
                Save Playlist
            </button>
        </form>
    )
}