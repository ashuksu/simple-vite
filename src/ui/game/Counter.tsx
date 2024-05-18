import {type Props, useCounter} from "../../bll/game/useCounter";


export function Counter(props: Props) {
    const {endCount, handleClick} = useCounter(props);

    return (
        <>
            <h2 className='py-3'>Нажми на кнопку {endCount} раза, чтобы увидеть слона</h2>
            <button
                className={`flex items-center justify-center w-max gap-2 py-2.5 px-4
                    bg-amber-500 rounded-md text-black  cursor-pointer`}
                onClick={handleClick}>
                Counter:
                <span className='font-bold'>{props.count}</span>
            </button>
        </>

    )
}