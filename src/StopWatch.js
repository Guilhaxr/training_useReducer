import {useReducer, useRef, useEffect} from 'react';

const watchReducer = (state, action) =>{
    if(action.type === "start"){
        return {state, isRunning: true}
    }
    if(action.type === "stop"){
        return {state, isRunning: false}
    }

    if( action.type === "reset"){
        return { time: 0, isRunning: false }
    }
    if(action.type === "tick"){
        return {time: state.time + 1}
    }
    return { time: 0, isRunning: false}
}


const StopWatch = () => {
    
    const [watchState, watchDispacht] = useReducer(watchReducer,{
        time: 0,
        isRunning: false
    });

    const idRef = useRef(0);

    useEffect(()=>{
        if(!watchState.isRunning){
            return;
        }

        idRef.current = setInterval(()=>watchDispacht({type: "tick"}), 1000)
    })



    return(
        <>
        <button onClick={()=>watchDispacht({type: "start"})}>Start</button>
        <button onClick={()=>watchDispacht({type: "stop"})}>Stop</button>
        <button onClick={()=> watchDispacht({type: "reset"})}>Reset</button>
        <span>{watchState.time}</span>
        </>
    )

}

export default StopWatch;