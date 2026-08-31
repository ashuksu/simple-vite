import {useMutation, useQueryClient} from "@tanstack/react-query"
import {localStorageKeys} from "../../../shared/config";
import {client} from "../../../shared/api";

export const useLogoutMutation = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: async () => {
            const {data} = await client.POST('/auth/logout', {
                body: {
                    refreshToken: localStorage.getItem(localStorageKeys.refreshToken)!
                }
            })

            return data;
        },
        onSuccess: () => {
            localStorage.removeItem(localStorageKeys.refreshToken)
            localStorage.removeItem(localStorageKeys.accessToken)
            queryClient.resetQueries({
                queryKey: ['auth', 'me']
            })
        },
    })

    return mutation;
}