import {useLogoutMutation} from "../model/use-logout-mutation.tsx";

export function LogoutButton() {
    const mutation = useLogoutMutation()

    return (
        <button
            onClick={() => mutation.mutate()}
            className="flex items-center justify-center bg-red-200 hover:bg-red-300 text-gray-800 font-black hover:text-black cursor-pointer transition px-2 py-1 rounded"
        >
            Logout
        </button>
    )
}