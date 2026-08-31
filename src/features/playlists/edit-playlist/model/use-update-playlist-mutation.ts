import type {SchemaGetPlaylistsOutput, SchemaUpdatePlaylistRequestPayload} from "../../../../shared/lib/schema.ts";
import {client} from "../../../../shared/api/client.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {playlistsKeys} from "../../../../shared/api/keys-factories/playlists-keys-factoriy.ts";

type MutationVariables = SchemaUpdatePlaylistRequestPayload & { playlistId: string }

export const useUpdatePlaylistMutation = () => {
    const key = playlistsKeys.meList();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (variables: MutationVariables) => {
            const {playlistId, ...rest} = variables;

            const response = await client.PUT('/playlists/{playlistId}', {
                params: {
                    path: {playlistId: playlistId!}
                },
                body: {
                    ...rest,
                    data: {
                        ...rest.data,
                        attributes: {
                            ...rest.data.attributes,
                            tagIds: [],
                        }
                    }
                }
            })

            return response.data;
        },
        onMutate: async (variables: MutationVariables, context) => {
            await context.client.cancelQueries({queryKey: playlistsKeys.all})

            const previousMyPlatLists = context.client.getQueryData(key)

            context.client.setQueryData(key, (oldData: SchemaGetPlaylistsOutput) => {
                return {
                    ...oldData,
                    data: oldData.data.map(p => {
                        if (p.id === variables.playlistId) {
                            return {
                                ...p,
                                attributes: {
                                    ...p.attributes,
                                    description: variables.data.attributes.description,
                                    title: variables.data.attributes.title,
                                }
                            }
                        } else {
                            return p;
                        }
                    })
                }
            })

            return {previousMyPlatLists}
        },
        onError: (_, __: MutationVariables, onMutateResult, context) => {
            context.client.setQueryData(
                key,
                onMutateResult!.previousMyPlatLists,
            )
        },
        onSettled: (_, __, variables: MutationVariables) => {
            queryClient.invalidateQueries({
                queryKey: playlistsKeys.lists(),
                refetchType: 'all',
            });

            queryClient.invalidateQueries({
                queryKey: playlistsKeys.detail(variables.playlistId),
                refetchType: 'all',
            })
        }
    })
}