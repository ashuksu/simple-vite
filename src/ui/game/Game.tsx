import {Counter} from "./Counter";
import {Elephant} from "./Elephant";
import {useGame} from "../../bll/game/useGame";
import {cx} from "tailwind-variants";
import style from "./Game.module.css"

export function Game() {
    const {active, count, setCount, handleReset, handleFinish} = useGame()

    return (
        <div className={cx(
            style.box,
            active === 'elephant' && style.inner
        )}>
            <div className='flex flex-col items-center p-[0_2rem_2rem]'>
                {active === 'counter' && <Counter count={count} setCount={setCount} onFinish={handleFinish}/>}
                {active === 'elephant' && <Elephant onReset={handleReset}/>}
            </div>
        </div>
    )
}