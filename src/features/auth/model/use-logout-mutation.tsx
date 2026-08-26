import {useMutation, useQueryClient} from "@tanstack/react-query"
import {client} from "../../../shared/api/client.ts";

export const useLogoutMutation = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: async () => {
            const {data} = await client.POST('/auth/logout', {
                body: {
                    refreshToken: localStorage.getItem('oauth-refresh-token')!
                }
            })

            return data;
        },
        onSuccess: () => {
            localStorage.removeItem('oauth-refresh-token')
            localStorage.removeItem('oauth-access-token')
            queryClient.resetQueries({
                queryKey: ['auth', 'me']
            })
        },
    })

    return mutation;
}