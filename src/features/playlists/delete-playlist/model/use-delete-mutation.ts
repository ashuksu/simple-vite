import {useMutation, useQueryClient} from "@tanstack/react-query"
import {client} from "../../../../shared/api/client.ts";
import type {SchemaGetPlaylistsOutput} from "../../../../shared/lib/schema.ts";
import {playlistsKeys} from "../../../../shared/api/keys-factories/playlists-keys-factory.ts";

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