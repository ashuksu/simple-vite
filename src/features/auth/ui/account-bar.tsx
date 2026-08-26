import {LoginButton} from "./login-button.tsx";
import {CurrentUser} from "./current-user.tsx";
import {useMeQuery} from "../model/use-me-query.ts";

export const AccountBar = () => {
    const query = useMeQuery()

    if (query.isPending) {
        return <></>
    }

    return (
        <div>
            {!query.data && <LoginButton/>}
            {query.data && <CurrentUser/>}
        </div>
    )
}