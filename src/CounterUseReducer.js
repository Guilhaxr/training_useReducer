import { useReducer } from "react";

const initialState = {counter : 0};

const reducer = (state, action) => {
    if(action.type === 'decrement'){
        return {counter: state.counter - 1}
    }

    if( action.type === 'increment') {
        return {counter: state.counter + 1}
    }

    return state
}

const CounterUseReducer = () => {

const [state, dispacht] = useReducer(reducer, initialState);
    return(
        <div>
            <h2>Counter Reducer</h2>
            <button onClick={()=> dispacht({type: 'decrement' })}>-</button>
            <span>{state.counter}</span>
            <button onClick={()=> dispacht({type: 'increment', }) }>+</button>
        </div>

    )
}

export default CounterUseReducer;