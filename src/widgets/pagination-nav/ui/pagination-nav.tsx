import {getPaginationPages} from "../../pagination/mode/get-pagination-pages.ts";
import {tv} from "tailwind-variants";

type Props = {
    current: number
    pagesCount: number
    onChange: (page: number) => void
}

const SIBLING_COUNT = 1

const classNameButton = tv({
    base: [
        'button button--sm min-w-8 h-8 px-[5px]'
    ],
    variants: {
        isCurrent: {
            true: 'button--primary opacity',
            false: 'button--ternary'
        }
    }
});


export const PaginationNav = ({current, pagesCount, onChange}: Props) => {
    const pages = getPaginationPages(current, pagesCount, SIBLING_COUNT)

    return (
        <div className='flex items-center justify-center gap-2'>
            {pages.map((item: number | '...', idx: number) => {
                const isCurrent = item === current

                return item === '...' ? (
                    <span
                        className='px-0.5 pt-3 select-none font-bold tracking-[3px]'
                        key={`ellipsis-${idx}`}>
                        ...
                    </span>
                ) : (
                    <button
                        key={item}
                        className={classNameButton({isCurrent})}
                        onClick={() => !isCurrent && onChange(Number(item))}
                        disabled={isCurrent}
                        type="button"
                    >
                        {item}
                    </button>
                )
            })}
        </div>
    )
}