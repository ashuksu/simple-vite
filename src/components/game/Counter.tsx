type Props = {
    count: number
    setCount: (count: number) => void
    onFinish?: () => void
}

export function Counter(props: Props) {

    const endCount = 5

    const handleClick = () => {
        const currentCount = props.count + 1;
        props.setCount(currentCount)

        if (currentCount === endCount && props.onFinish) {
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