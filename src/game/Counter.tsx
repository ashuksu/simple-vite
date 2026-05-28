export function Counter(props) {

    const endCount = 5

    const handleClick = () => {
        let curentCount = props.count + 1;
        props.setCount(curentCount)

        if (curentCount === endCount && props.onFinish) {
            props.onFinish()
        }
    }

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