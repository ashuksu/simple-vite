import {useEffect, useState} from "react";

export function App() {
  return (
    <main className="p-5 flex flex-col gap-5">
        <Counter/>
        <Age/>
    </main>
  )
}

function useCounter(initValue: number, ms: number) {
    const [value, setValue] = useState(initValue)

    useEffect(() => {
        setInterval(() => {
            setValue(initValue)
        }, ms)
    }, [])

    return {value, inc: () => setValue(value + 1)}
}

function Counter() {
    const {value, inc} = useCounter(2, 4000)

    return <button
        className='border-amber-50 border-2 p-5 w-50'
        onClick={() => inc()}>Counter: {value}</button>
}

function Age() {
    const {value, inc} = useCounter(10, 10000)

    return <button
        className='border-amber-50 border-2 p-5 w-50'
        onClick={() => inc()}>Counter: {value}</button>
}