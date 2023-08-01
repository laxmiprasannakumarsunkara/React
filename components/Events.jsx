import { useState } from "react"

const Events1=()=>{
    const [x,setX]=useState(0);
    const incr=()=>{
        setX(x=>x+1);
    }
    const decr=()=>{
        setX(x=>x-1);
    }
    return(
        <>
        <h1>{x}</h1>
        <button onClick={incr}>Incre</button>
        <button onClick={decr}>decr</button>
        </>
    )

}
export default Events1;