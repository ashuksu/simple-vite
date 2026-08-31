import {createFileRoute} from '@tanstack/react-router'
import {OAuthCallbackPage} from "../../../pages/oauth-callback";

export const Route = createFileRoute('/oauth/callback')({
    head: () => ({
        meta: [{
            title: 'OAuth2 Callback | My App',
        }]
    }),
    component: OAuthCallbackPage,
})

