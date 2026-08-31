import {useQuery} from "@tanstack/react-query";
import {client} from "../../../../shared/api";

export const usePlaylistQuery = (playlistId: string | null) => {
    return useQuery({
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
}