import {Link} from '@tanstack/react-router'
import styles from './account-bar.module.css'
import {useMeQuery} from "../model/use-me-query.ts";

export const CurrentUser = () => {
    const query = useMeQuery()
    
    if (!query.data) return <span>...</span>

    return (
        <div className={styles.meInfoContainer}>
            <Link to="/my-playlist-page" activeOptions={{exact: true}}>
                {query.data!.login}
            </Link>
        </div>
    )
}
