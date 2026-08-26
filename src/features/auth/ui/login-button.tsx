import {API_URL, OAUTH_REDIRECT_URI} from "../../../config.ts";
import {useLoginMutation} from "../model/use-login-mutation.tsx";

export function LoginButton() {
    const mutation = useLoginMutation()

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
            className="flex items-center justify-center bg-blue-200 hover:bg-blue-300 text-gray-800 font-black hover:text-black cursor-pointer transition px-2 py-1 rounded"
            onClick={handleLogin}>
            Login with API-HUB
        </button>
    )
}