import comp8 from "./comp8";
import { useState } from "react";
const comp7 =(props)=>{
    const[str,setStr]=useState('react');
    const[num,setNum]=useState(100);
    return(
        <>
        <comp8 str={str} num= {num}></comp8>
        </>
    )  
    
};
export default comp7;