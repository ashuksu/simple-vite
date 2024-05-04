export function ButtonFood(props) {
    return (
        <button
            className={`${props.styleCSS ?? ''} flex items-center justify-center gap-2 p-2.5 w-1/2 rounded-md text-white cursor-pointer`}
            onClick={props.handleFeedJunkFood}>
            {props.title}
        </button>
    )
}