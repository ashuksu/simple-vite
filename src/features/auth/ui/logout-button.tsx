import {cn} from "tailwind-variants";
import {useLogoutMutation} from "../model/use-logout-mutation.tsx";

export const LogoutButton = () => {
    const mutation = useLogoutMutation()

    return (
        <button
            onClick={() => mutation.mutate()}
            className={cn('button button--secondary')}>
            Logout
        </button>
    )
}