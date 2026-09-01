export type Props = {
    count: number
    setCount: (count: number) => void
    onFinish?: () => void
}

export function useCounter(props: Props) {
    const endCount = 5

    const handleClick = () => {
        const currentCount = props.count + 1;
        props.setCount(currentCount)

        if (currentCount === endCount && props.onFinish) {
            props.onFinish()
        }
    }

    return {endCount, handleClick}
}