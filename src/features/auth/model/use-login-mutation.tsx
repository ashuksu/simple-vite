import {useMutation, useQueryClient} from "@tanstack/react-query"
import {client} from "../../../shared/api/client.ts";
import {OAUTH_REDIRECT_URI} from "../../../shared/config/api-config.ts";
import {localStorageKeys} from "../../../shared/config/localstorage-keys.ts";

export const useLoginMutation = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: async ({code}: { code: string }) => {
            const {data, error} = await client.POST('/auth/login', {
                body: {
                    code: code,
                    redirectUri: OAUTH_REDIRECT_URI,
                    rememberMe: true,
                    accessTokenTTL: '60m'
                }
            })

            if (error) {
                const errorMessage = (error as unknown as { message?: string })?.message || 'Login failed'
                throw new Error(errorMessage)
                // console.warn('Error mutation: ', errorMessage);
            }

            return data;
        },
        onSuccess: (data) => {
            localStorage.setItem(localStorageKeys.refreshToken, data.refreshToken)
            localStorage.setItem(localStorageKeys.accessToken, data.accessToken)
            queryClient.invalidateQueries({
                queryKey: ['auth', 'me']
            })
        }
    })

    return mutation;
}