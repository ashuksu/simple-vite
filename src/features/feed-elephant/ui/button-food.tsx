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
                'button button-md rounded-lg self-stretch',
                className)}
            onClick={handleFeedJunkFood}>
            {title}
        </button>
    )
}