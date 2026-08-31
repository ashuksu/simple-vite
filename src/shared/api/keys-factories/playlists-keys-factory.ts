import type {SchemaGetPlaylistsRequestPayload} from "../../lib";

export const playlistsKeys = {
    all: ['playlists'] as const,
    lists: () => [...playlistsKeys.all, 'lists'] as const,
    meList: () => [...playlistsKeys.lists(), 'my'] as const,
    list: (filter: Partial<SchemaGetPlaylistsRequestPayload>) => [...playlistsKeys.lists(), filter] as const,
    details: () => [...playlistsKeys.all, 'details'] as const,
    detail: (id: string) => [...playlistsKeys.details(), id] as const,
}