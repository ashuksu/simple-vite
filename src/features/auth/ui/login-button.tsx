import {useMutation} from "@tanstack/react-query"
import {client} from "../../../shared/api/client.ts";
import {API_URL} from "../../../config.ts";

export function LoginButton() {
    const callbackUrl = 'http://localhost:5173/oauth/callback';

    const mutation = useMutation({
        mutationFn: async ({code}: { code: string }) => {
            const response = await client.POST('/auth/login', {
                body: {
                    code: code,
                    redirectUri: callbackUrl,
                    rememberMe: true,
                    accessTokenTTL: '1d'
                }
            })

            if (response.error) {
                const errorMessage = (response.error as unknown as { message: string }).message || 'Login failed'
                throw new Error(errorMessage)
            }

            return response.data;
        }
    })

    const handleLogin = () => {
        window.addEventListener('message', handleOauthMessage, {once: true})

        window.open(
            `${API_URL}auth/oauth-redirect?callbackUrl=${callbackUrl}`,
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