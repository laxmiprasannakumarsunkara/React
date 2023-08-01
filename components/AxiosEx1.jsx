
import {useState,useEffect} from "react";
import axios from"axios";
const AxiosEx1=()=>{
    const[arr,setArr]=useState([]);
   useEffect(()=>{
    const func_one=async()=>{
        const result= await axios.get("https://reqres.in/api/unknown");
        const{data:x}=result
        const{data}=x;
        setArr(data);

    }
    func_one();
   },[])
   return(
     <>
     {
        arr.length==0?(<div className="fa fa-spin fa-spinner"></div>):(<table border={1}
                                                                               align="center"
                                                                                cellSpacing={10}
                                                                                cellPadding={10}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>color</th>
                        <th>pantone_value</th>
                        <th>year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    arr.map((element,index)=>
                    {
                        return(<tr key={index}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.color}</td>
                            <td>{element.pantone_value}</td>
                            <td>{element.year}</td>
                        </tr>)
})
                        }
        
                </tbody>

        </table>)
}
     </>
   )
}
export default AxiosEx1;