import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {playlistsKeys} from "../../../shared/api/keys-factories/playlists-keys-factoriy.ts";
import {client} from "../../../shared/api/client.ts";
import type {SchemaGetPlaylistsRequestPayload} from "../../../shared/lib/schema.ts";

const usePlaylistsQuery = (userId: string | undefined, filter: Partial<SchemaGetPlaylistsRequestPayload>) => {
    const queryParams = userId ? {userId} : filter
    const key = userId
        ? [...playlistsKeys.meList(), queryParams]
        : playlistsKeys.list(filter);
    
    return useQuery({
        queryKey: key,
        queryFn: async ({signal}) => {
            const {data, error} = await client.GET('/playlists', {
                params: {
                    query: queryParams
                },
                signal //request interruption
            });

            if (error) {
                throw error;
                // console.warn('Error playlists: ', error);
                // return null;
            }

            return data;
        },
        placeholderData: keepPreviousData
    });
}
export default usePlaylistsQuery