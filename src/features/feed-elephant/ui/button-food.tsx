import {cn} from "tailwind-variants";

type Props = {
    className?: string
    title: string
    handleFeedJunkFood: () => void
}

export function ButtonFood({title, className, handleFeedJunkFood}: Props) {
    return (
        <button
            className={cn(
                'button p-2.5 w-1/2 rounded-md',
                className)}
            onClick={handleFeedJunkFood}>
            {title}
        </button>
    )
}