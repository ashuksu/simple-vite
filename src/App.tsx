import {useState} from "react";

export function App() {
  return (
    <main className="p-5 flex flex-col gap-5">
        <Counter/>
        <Age/>
    </main>
  )
}

export function Counter() {
    const [value, setValue] = useState(1);

    return (
        <button
            className='border-amber-50 border-2 p-5 w-50'
            onClick={() => setValue(value + 1)}>Counter: {value}</button>
    );
}

export function Age() {
    const [value, setValue] = useState(10);

    return (
        <button
            className='border-amber-50 border-2 p-5 w-50'
            onClick={() => setValue(value + 1)}>Age: {value}</button>
    );
}