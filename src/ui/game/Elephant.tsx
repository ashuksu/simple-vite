import {ConditionElephant} from "./ConditionElephant";
import {ButtonFood} from "./ButtonFood";
import {type Props, useElephant} from "../../bll/game/useElephant";

export function Elephant(props: Props) {
    const {
        weight,
        minW,
        live,
        titleCondition,
        handleClick,
        handleFeedHealthyFood,
        handleFeedJunkFood
    } = useElephant(props);

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
                                className='bg-green-500'
                                handleFeedJunkFood={handleFeedHealthyFood}
                                title='Кормить слона полезной едой 🥬🍉🍌'/>
                            <ButtonFood
                                handleFeedJunkFood={handleFeedJunkFood}
                                className='bg-red-500'
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