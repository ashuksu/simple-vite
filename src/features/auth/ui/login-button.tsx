import {useMutation} from "@tanstack/react-query"
import {client} from "../../../shared/api/client.ts";
import {API_URL, OAUTH_REDIRECT_URI} from "../../../config.ts";

export function LoginButton() {
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
        }
    })

    const handleLogin = () => {
        window.addEventListener('message', handleOauthMessage, {once: true})

        window.open(
            `${API_URL}auth/oauth-redirect?callbackUrl=${OAUTH_REDIRECT_URI}`,
            'api-hub-oauth2',
            'width=500,height=600'
        )
    }

    const handleOauthMessage = (event: MessageEvent) => {
        window.removeEventListener('message', handleOauthMessage)

        if (event.origin !== document.location.origin) {
            console.warn('origin not match')
            return
        }

        const code = event.data.code;

        if (!code) {
            console.warn('no code in message')
            return
        }

        mutation.mutate({code});
    }

    return (
        <button
            className="flex items-center justify-center bg-blue-200 text-gray-800 font-black hover:text-black cursor-pointer transition px-2 py-1 rounded"
            onClick={handleLogin}>
            Login with API-HUB
        </button>
    )
}