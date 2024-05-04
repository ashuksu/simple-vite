import {useState} from "react";
import {Counter} from "./Counter.tsx";
import {Elephant} from "./Elephant.tsx";

export function Game() {
    const [count, setCount] = useState(0)
    const [active, setActive] = useState('counter')

    const handleFinish = () => {
        setActive('elephant')
    }

    const handleReset = () => {
        setActive('counter')
        setCount(0)
    }

    return (
        <div className='px-4 py-1'>
            {active === 'counter' && <Counter count={count} setCount={setCount} onFinish={handleFinish}/>}
            {active === 'elephant' && <Elephant onReset={handleReset}/>}
        </div>
    )
}

