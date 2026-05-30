import {Counter} from "./Counter";
import {Elephant} from "./Elephant";
import {useGame} from "../../bll/game/useGame";

export function Game() {
    const {active, count, setCount, handleReset, handleFinish} = useGame()

    return (
        <div className='flex flex-col items-center px-4 py-1'>
            {active === 'counter' && <Counter count={count} setCount={setCount} onFinish={handleFinish}/>}
            {active === 'elephant' && <Elephant onReset={handleReset}/>}
        </div>
    )
}