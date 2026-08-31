import {cn} from "tailwind-variants";
import {API_URL, OAUTH_REDIRECT_URI} from "../../../shared/config/api-config.ts";
import {useLoginMutation} from "../model/use-login-mutation.tsx";

export const LoginButton = () => {
    const mutation = useLoginMutation()

    const handleLogin = () => {
        window.addEventListener('message', handleOauthMessage, {once: true})

        window.open(
            `${API_URL}auth/oauth-redirect?callbackUrl=${OAUTH_REDIRECT_URI}`,
            'apihub-oauth2',
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
            className={cn('button button--primary')}
            onClick={handleLogin}>
            Login with API-HUB
        </button>
    )
}