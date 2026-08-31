import {type Props, useCounter} from "../model/use-counter.ts";


export function Counter(props: Props) {
    const {endCount, handleClick} = useCounter(props);

    return (
        <>
            <h2 className='mt-0'>Click the button {endCount} times to see the elephant</h2>
            <button
                className='button button--secondary button--md'
                onClick={handleClick}>
                <span className='font-bold'>Counter: </span>
                {props.count}
            </button>
        </>

    )
}