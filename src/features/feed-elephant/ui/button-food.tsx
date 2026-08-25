import {cx} from "tailwind-variants";

type Props = {
    className?: string
    title: string
    handleFeedJunkFood: () => void
}

export function ButtonFood({title, className, handleFeedJunkFood}: Props) {
    return (
        <button
            className={cx(
                'flex items-center justify-center gap-2 p-2.5 w-1/2 rounded-md text-white cursor-pointer',
                className)}
            onClick={handleFeedJunkFood}>
            {title}
        </button>
    )
}