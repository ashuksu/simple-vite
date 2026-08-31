import {useMutation, useQueryClient} from "@tanstack/react-query";
import type {SchemaCreatePlaylistRequestPayload} from "../../../../shared/lib";
import {client, playlistsKeys} from "../../../../shared/api";

export const useAddPlaylistMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (payload: SchemaCreatePlaylistRequestPayload) => {
            const {data, error} = await client.POST('/playlists', {
                body: {
                    ...payload,
                    data: {
                        ...payload.data,
                        type: 'playlists',
                        attributes: {
                            ...payload.data.attributes,
                            tagIds: [],
                        }
                    }
                }
            })

            if (error) {
                throw error;
            }

            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: playlistsKeys.lists(),
                refetchType: 'all'
            })
        },
        meta: {globalErrorHandler: 'on'}
    })
}