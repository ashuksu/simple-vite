import {useMutation, useQueryClient} from "@tanstack/react-query"
import type {SchemaGetPlaylistsOutput} from "../../../../shared/lib";
import {client, playlistsKeys} from "../../../../shared/api";

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
            queryClient.setQueriesData({queryKey: playlistsKeys.lists()}, (oldData: SchemaGetPlaylistsOutput) => {
                return {
                    ...oldData,
                    data: oldData.data.filter(p => p.id !== playlistId)
                }
            })

            queryClient.removeQueries({queryKey: playlistsKeys.detail(playlistId)});
        }
    })
}