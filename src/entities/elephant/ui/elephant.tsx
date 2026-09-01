import {ConditionElephant} from "./condition-elephant.tsx";
import {ButtonFood} from "../../../features/feed-elephant";
import {type Props, useElephant} from "../model/use-elephant.ts";
import {cx} from "tailwind-variants";

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
            <div className={cx([
                'flex justify-center w-50 h-40 pb-3 relative z-1',
                live || (weight <= minW) ? 'items-end' : 'items-start'])}>
                <div
                    style={{
                        fontSize: `${weight}rem`,
                    }}
                    className={`leading-none ${!live && '-scale-y-100'}`}>
                    🐘
                </div>
            </div>
            <button
                className='button button--secondary button--md relative z-5'
                onClick={handleClick}>
                Let's play again?
            </button>
            <div>
                {live ? (
                    <>
                        <h2 className='font-bold text-2xl'>
                            Feed the elephant
                        </h2>
                        <p className='mb-3'>
                            Elephant's weight: <span className='font-bold'>{weight * 10}</span>
                        </p>
                        <div className="grid grid-cols-2 gap-3 max-w-60">
                            <ButtonFood
                                handleFeedJunkFood={handleFeedHealthyFood}
                                title='Feed the elephant healthy food 🥬🍉🍌'/>
                            <ButtonFood
                                handleFeedJunkFood={handleFeedJunkFood}
                                className='button--accent'
                                title='Feed the elephant junk food 🍔🍬🍕'/>
                        </div>
                    </>
                ) : (
                    <>
                        <ConditionElephant
                            title={titleCondition}/>
                        <p className='mb-3'>
                            Elephant's weight: <span className='font-bold'>{weight * 10}</span>
                        </p>
                    </>
                )}
            </div>
        </>

    )
}