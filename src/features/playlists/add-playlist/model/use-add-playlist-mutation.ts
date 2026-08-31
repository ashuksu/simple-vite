import type {SchemaCreatePlaylistRequestPayload} from "../../../../shared/lib/schema.ts";
import {client} from "../../../../shared/api/client.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {playlistsKeys} from "../../../../shared/api/keys-factories/playlists-keys-factoriy.ts";

export const useAddPlaylistMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (data: SchemaCreatePlaylistRequestPayload) => {
            const response = await client.POST('/playlists', {
                body: data
            })

            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: playlistsKeys.lists(),
                refetchType: 'all'
            })
        }
    })
}