import {useState} from "react";

export function App() {
    return (
        <>
            <LightSwitch/>
            <br/>
            <LightSwitch2/>
        </>
    )
}

function useToggle(initialValue: boolean = false) {
    const [isOn, setIsOn] = useState<boolean>(initialValue)

    const toggle = () => {
        setIsOn(value => !value)
    }

    return {isOn, toggle, setIsOn}
}

export const LightSwitch = () => {
    const {isOn, toggle} = useToggle(true)

    return (
        <div>
            <h2>{isOn ? "💡 Свет включен" : "🌙 Свет выключен"}</h2>
            <button onClick={toggle}>Переключить свет</button>
        </div>
    )
}

export const LightSwitch2 = () => {
    const {isOn, toggle, setIsOn} = useToggle(true)

    return (
        <div>
            <h2>{isOn ? "💡 Свет включен" : "🌙 Свет выключен"}</h2>
            <button onClick={toggle}>Переключить свет</button>
            <br/>
            <button onClick={() => setIsOn(true)}>Включить 💡</button>
            <button onClick={() => setIsOn(false)}>Выключить 🌙</button>
        </div>
    )
}