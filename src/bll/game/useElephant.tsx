import {useState} from "react";

export type Props = {
    onReset: () => void
}

export function useElephant(props: Props) {
    const [weight, setWeight] = useState(7)
    const [live, setLive] = useState(true)
    const delta: number = 1
    const minW: number = 5
    const maxW: number = 10
    const titleCondition = !live && (weight <= minW)
        ? 'Слон умер от голода!'
        : 'Умер от ожирения!'

    const handleClick = () => {
        if (props.onReset) {
            props.onReset()
        }
    }

    const handleFeedHealthyFood = (): void => {
        if (!live) return
        setWeight(weight + delta)
        if (weight >= maxW) setLive(false)
    }

    const handleFeedJunkFood = (): void => {
        if (!live) return
        setWeight(weight - delta)
        if (weight <= minW) setLive(false)
    }

    return {weight, minW, live, titleCondition, handleClick, handleFeedHealthyFood, handleFeedJunkFood}
}