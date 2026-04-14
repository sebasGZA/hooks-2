import { useMemo } from "react";
import { useCounter } from "../hooks/useCounter"

const heavyStuff = (iteration: number) => {
    console.time('Heavy_stuff_started');

    for (let index = 0; index < iteration; index++) {
        console.log('Where are here!')
    }

    console.timeEnd('Heavy_stuff_started');
    return `${iteration} iteration done!`
}

export const MemoCounter = () => {
    const { counter, increment } = useCounter(40000);
    const { counter: counter2, increment: increment2 } = useCounter(10);


    const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);
    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Memo + useMemo {myHeavyValue}</h1>
            <hr />
            <h4>
                Counter: {counter}
            </h4>
            <h4>
                Counter2: {counter2}
            </h4>

            <button
                className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
                onClick={increment}>
                +1
            </button>
                        <button
                className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
                onClick={increment2}>
                +1 counter2
            </button>
        </div>
    )
}