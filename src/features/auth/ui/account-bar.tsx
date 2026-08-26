import {useQuery} from "@tanstack/react-query";
import {LoginButton} from "./login-button.tsx";
import {client} from "../../../shared/api/client.ts";

export const AccountBar = () => {
    const query = useQuery({
        queryKey: ['auth', 'me'],
        queryFn: async () => {
            const {data} = await client.GET('/auth/me')
            return data ?? null
        }
    })

    return (
        <div>
            {!query.data && <LoginButton/>}
            {/*!query.data?.login*/}
            {/*{query.data && <CurrentUser/>}*/}
        </div>
    )
}