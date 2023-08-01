import Comp9 from "./comp9";
import { useState } from "react";
const comp8 =(props)=>{
    const[flag,setFlag]=useState(false);
    return(
        <>
        <Comp9{...props}flag={flag}></Comp9>
        </>
    )
};
export default comp8;