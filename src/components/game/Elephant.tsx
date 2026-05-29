import {useState} from "react";
import {ConditionElephant} from "./ConditionElephant";
import {ButtonFood} from "./ButtonFood";

export function Elephant(props: any) {
    const [weight, setWeight] = useState(7)
    const [live, setLive] = useState(true)
    const delta: number = 1
    const minW : number= 5
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

    return (
        <>
            <div className={`flex justify-center w-50 h-40 pb-3 relative z-1 
                ${live || weight <= minW ? 'items-end' : 'items-start'}`}
            >
                <div
                    style={{
                        fontSize: `${weight}rem`,
                    }}
                    className={`leading-none ${!live && '-scale-y-100'}`}>
                    🐘
                </div>
            </div>
            <button
                className={`flex items-center justify-center w-max gap-2 py-2.5 px-4
                    bg-amber-500 rounded-md text-black relative z-5 cursor-pointer`}
                onClick={handleClick}>
                Давай сыграем еще раз?
            </button>
            <div>
                {live ? (
                    <>
                        <h2 className='py-3 font-bold text-2xl'>
                            Покормить слона
                        </h2>
                        <p className='mb-3'>
                            Вес слона: <span className='font-bold'>{weight * 10}</span>
                        </p>
                        <div className="flex items-center gap-3 max-w-60">
                            <ButtonFood
                                styleCSS='bg-green-500'
                                handleFeedJunkFood={handleFeedHealthyFood}
                                title='Кормить слона полезной едой 🥬🍉🍌'/>
                            <ButtonFood
                                handleFeedJunkFood={handleFeedJunkFood}
                                styleCSS='bg-red-500'
                                title='Кормить слона вредной едой 🍔🍬🍕'/>
                        </div>
                    </>
                ) : (
                    <>
                        <ConditionElephant
                            title={titleCondition}/>
                        <p className='mb-3'>
                            Вес слона: <span className='font-bold'>{weight * 10}</span>
                        </p>
                    </>
                )}
            </div>
        </>

    )
}