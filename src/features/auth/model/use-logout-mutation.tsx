import {useMutation, useQueryClient} from "@tanstack/react-query"
import {client} from "../../../shared/api/client.ts";
import {localStorageKeys} from "../../../shared/config/localstorage-keys.ts";

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