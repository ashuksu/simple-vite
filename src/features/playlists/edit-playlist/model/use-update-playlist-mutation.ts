import {useMutation, useQueryClient} from "@tanstack/react-query";
import type {SchemaGetPlaylistsOutput, SchemaUpdatePlaylistRequestPayload} from "../../../../shared/lib";
import {client, playlistsKeys} from "../../../../shared/api";

type MutationVariables = SchemaUpdatePlaylistRequestPayload & { playlistId: string }

export const useUpdatePlaylistMutation = ({onSuccess}: { onSuccess?: () => void }) => {
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
                        type: 'playlists',
                        attributes: {
                            ...rest.data.attributes,
                            tagIds: [],
                        }
                    }
                }
            })

            return response.data;
        },
        onMutate: async (variables: MutationVariables) => {
            await queryClient.cancelQueries({queryKey: playlistsKeys.all});

            queryClient.setQueriesData(
                {queryKey: playlistsKeys.lists()},
                (oldData: SchemaGetPlaylistsOutput | undefined) => {
                    if (!oldData?.data) return oldData;
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
                            }

                            return p;
                        })
                    }
                }
            )
        },
        onSuccess: () => {
            onSuccess?.();
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