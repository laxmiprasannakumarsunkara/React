import { useState } from "react"

const Events2=()=>{
    const [x,setX]=useState("");
    const login=(param1,param2)=>{
        if(param1==`shiva`&&param2==`shiva@123`){
            setX("login successs")
        }
        else{
            setX("login fails")
        }
    };
    return(
        <>
        <button onClick={()=>login(`shiva`,`shiva123`)}>
        </button></>
    )

    }
}