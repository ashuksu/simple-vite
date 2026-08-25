import {cx} from "tailwind-variants";
import {PaginationNav} from "../../pagination-nav/ui/pagination-nav.tsx";
import styles from "./pagination.module.css";

type Props = {
    current: number,
    pagesCount: number,
    changePageNumber: (page: number) => void,
    isFetching: boolean,
}

export const Pagination = ({current, pagesCount, changePageNumber, isFetching}: Props) => {
    return (
        <div className={styles.container}>
            <PaginationNav
                current={current}
                pagesCount={pagesCount}
                onChange={changePageNumber}/>
            {isFetching && '⌛'}
            <i className={cx(
                'flex w-3 h-3 rounded-full transition-color duration-2000',
                isFetching && 'bg-blue-400'
            )}/>
        </div>
    )
}