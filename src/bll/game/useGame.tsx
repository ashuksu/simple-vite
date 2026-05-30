import {useState} from "react";

export function useGame() {
    const [count, setCount] = useState(0)
    const [active, setActive] = useState('counter')

    const handleFinish = () => {
        setActive('elephant')
    }

    const handleReset = () => {
        setActive('counter')
        setCount(0)
    }

    return {count, setCount, active, setActive, handleReset, handleFinish}
}