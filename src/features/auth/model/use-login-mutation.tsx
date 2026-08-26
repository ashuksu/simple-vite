import {useMutation, useQueryClient} from "@tanstack/react-query"
import {client} from "../../../shared/api/client.ts";
import {OAUTH_REDIRECT_URI} from "../../../config.ts";

export function useLoginMutation() {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: async ({code}: { code: string }) => {
            const {data, error} = await client.POST('/auth/login', {
                body: {
                    code: code,
                    redirectUri: OAUTH_REDIRECT_URI,
                    rememberMe: true,
                    accessTokenTTL: '1d'
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
            if (!data) return

            localStorage.setItem('oauth-refresh-token', data.refreshToken)
            localStorage.setItem('oauth-access-token', data.accessToken)
            queryClient.invalidateQueries({
                queryKey: ['auth', 'me']
            })
        }
    })

    return mutation;
}