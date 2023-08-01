import {useState,useEffect} from "react";
import axios from"axios";
const AxiosEx2=()=>{
    const[arr1,setArr1]=useState([]);
   useEffect(()=>{
    const func_two=async()=>{
        const result= await axios.get("https://www.w3schools.com/angular/customers.php");
        
        setArr1(result.data.records);
    }
    func_two();
   },[])
   return(
    <>

    {
        arr1.length==0?(<div className="loader">Loading...</div>):(<table border={1}
                                                                          align="center"
                                                                          cellSpacing={10}
                                                                          cellPadding={10}>
       <thead>
        {
            arr1.map(element,index)=>{
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            }
        }
       </thead>
                                                                          </table>)
    }
    </>
   )
}
export default AxiosEx2;