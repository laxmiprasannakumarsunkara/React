import { useState } from "react"
import Error from "./Error.jsx";
import Success from "./Success.jsx";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Condi=()=>{
    const [flag,setFlag]=useState(true);
    const func=()=>{
        setFlag(flag=>!flag)               
    }
    return(
        <>
        <button className=" m-5 btn btn-lg text-warning bg-dark rounded-pill box-sizing: content-box" onClick={func}>change</button>
         
    {
        flag?<Success></Success>:<Error></Error>
    }
    </>
    )
}
export default Condi;