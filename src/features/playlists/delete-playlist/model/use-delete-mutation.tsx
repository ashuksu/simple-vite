import {useMutation, useQueryClient} from "@tanstack/react-query"
import {client} from "../../../../shared/api/client.ts";
import type {SchemaGetPlaylistsOutput} from "../../../../shared/lib/schema.ts";

export const useDeleteMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (playlistId: string) => {
            const {data} = await client.DELETE('/playlists/{playlistId}', {
                params: {path: {playlistId}}
            })

            return data;
        },
        onSuccess: (_, playlistId) => {
            queryClient.setQueriesData({queryKey: ['playlist', playlistId]}, (oldData: SchemaGetPlaylistsOutput) => {
                return {
                    ...oldData,
                    data: oldData.data.filter(p => p.id !== playlistId)
                }
            })
        }
    })
}