import { useState } from "react"


const CounterState =  () => {
    const [counter, setCounter] = useState(0)


    return(
        <div>
            <h2>Counter STATE</h2>
            <button onClick={()=> setCounter(counter - 1)}>-</button>
            <section>{counter}</section>
            <button onClick={()=> setCounter(counter + 1)}>+</button>
        </div>

    )
}

export default CounterState;