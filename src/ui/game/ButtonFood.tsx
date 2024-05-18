import {cn} from "../../lib/utils";

type Props = {
    className?: string
    title: string
    handleFeedJunkFood: () => void
}

export function ButtonFood({title, className, handleFeedJunkFood}: Props) {
    return (
        <button
            className={cn(
                className,
                'flex items-center justify-center gap-2 p-2.5 w-1/2 rounded-md text-white cursor-pointer'
            )}
            onClick={handleFeedJunkFood}>
            {title}
        </button>
    )
}