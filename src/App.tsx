import {useState} from "react";

export function App() {
    return (
        <div className="flex flex-col gap-3 items-start p-5">
            <LightSwitch/>
            <LightSwitch2/>
            <VisibilityToggle/>
            <NotificationSwitch/>
            <br/>
            <TextPage/>
        </div>
    )
}

function useToggle(initialValue: boolean = false) {
    const [isOn, setIsOn] = useState<boolean>(initialValue)

    const toggle = () => {
        setIsOn(value => !value)
    }

    const reset = () => {
        setIsOn(initialValue)
    }

    return {isOn, toggle, setIsOn, reset}
}

function NotificationSwitch() {
    const {isOn, toggle, setIsOn, reset} = useToggle(true)

    return (
        <div className='flex flex-col gap-3'>
            {isOn ? <h2>🔔 Уведомления включены</h2> : <h2>🔕 Уведомления выключены</h2>}

            <div className='flex gap-3'>
                <button onClick={toggle}>Переключить (сообщения)</button>
                {/*переключает состояние*/}
                <button onClick={() => setIsOn(true)}>Включить Сообщения</button>
                {/*устанавливает true*/}
                <button onClick={reset}>Сбросить (сообщения) по умолчанию</button>
                {/*возвращает к начальному состоянию*/}
            </div>
        </div>
    )
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
    const {isOn, toggle, setIsOn, reset} = useToggle(false)

    return (
        <>
            <h2>{isOn ? "💡 Свет включен" : "🌙 Свет выключен"}</h2>
            <button onClick={toggle}>Переключить свет</button>
            <div className='flex gap-3'>
                <button onClick={() => setIsOn(true)}>Включить 💡</button>
                <button onClick={() => setIsOn(false)}>Выключить 🌙</button>
            </div>
            <button onClick={() => reset()}>Сбросить</button>
        </>
    )
}

function VisibilityToggle() {
    const {isOn, setIsOn} = useToggle(false)

    return (
        <div>
            <div className='flex gap-3'>
                <button onClick={() => {
                    setIsOn(true)
                }}>
                    Показать
                </button>
                <button onClick={() => {
                    setIsOn(false)
                }}>
                    Скрыть
                </button>

            </div>
            <br/>
            {isOn && (
                <div>
                    🎉 Это секретное сообщение!
                </div>
            )}
        </div>
    )
}


function useText(initialText: string = '') {
    const [text, setText] = useState<string>(initialText)
    const clear = () => setText('...')
    const toUpperCase = () => setText(text.toUpperCase());
    const toLowerCase = () => setText(text.toLowerCase())

    return {text, setText, clear, toUpperCase, toLowerCase}
}

function TitleEditor() {
    const {text, toUpperCase, toLowerCase, clear} = useText("Заголовок статьи")

    return (
        <div className='flex flex-col gap-3'>
            <h2>{text}</h2>
            <button onClick={toUpperCase}>ВЕРХНИЙ РЕГИСТР</button>
            <button onClick={toLowerCase}>нижний регистр</button>
            <button onClick={clear}>Очистить</button>
        </div>

    )
}

function GreetingCard() {
    const {text, setText, toUpperCase, toLowerCase, clear} = useText("Привет!")

    return (
        <div className='flex flex-col gap-3'>
            💬 {text}
            <button onClick={toUpperCase}>ГРОМКО</button>
            <button onClick={toLowerCase}>тихо</button>
            <button onClick={() => setText('Добро пожаловать!')}>Сказать 'Добро пожаловать!'</button>
            <button onClick={clear}>Молчать</button>
        </div>
    )
}

function TextPage() {
    return (
        <>
            <TitleEditor/>
            <br/>
            <br/>
            <hr/>
            <GreetingCard/>
        </>
    )
}