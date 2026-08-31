import {cx} from "tailwind-variants";
import {PaginationNav} from "./pagination-nav.tsx";

type Props = {
    current: number,
    pagesCount: number,
    changePageNumber: (page: number) => void,
    isFetching: boolean,
}

export const Pagination = ({current, pagesCount, changePageNumber, isFetching}: Props) => {
    return (
        <div className='flex items-center justify-center max-w-md gap-3'>
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