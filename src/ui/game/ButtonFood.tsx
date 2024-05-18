import {clsx} from "clsx";

type Props = {
    styleCSS?: string
    title: string
    handleFeedJunkFood: () => void
}

export function ButtonFood(props: Props) {
    return (
        <button
            className={clsx([
                props.styleCSS,
                'flex items-center justify-center gap-2 p-2.5 w-1/2 rounded-md text-white cursor-pointer'
            ])}
            onClick={props.handleFeedJunkFood}>
            {props.title}
        </button>
    )
}