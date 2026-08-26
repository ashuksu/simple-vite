import {Link} from '@tanstack/react-router'
import styles from './account-bar.module.css'
import {useMeQuery} from "../model/use-me-query.ts";
import {LogoutButton} from "./logout-button.tsx";

export const CurrentUser = () => {
    const query = useMeQuery()

    if (!query.data) return <span>...</span>

    return (
        <div className={styles.meInfoContainer}>
            <Link
                to="/my-playlist-page"
                activeOptions={{exact: true}}
                className="flex items-center justify-center hover:text-blue-200 transition px-2 py-1"
            >
                {query.data!.login}
            </Link>
            <LogoutButton/>
        </div>
    )
}
