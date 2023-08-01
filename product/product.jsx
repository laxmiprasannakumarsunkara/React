import { useState } from "react";
const State=()=>{

    const[str,setStr]=useState(`ReactJs`);
    const[num,setNum]=useState(100);
    const[flag,setFlag]=useState(true);
    const[arr1,setArr1]=useState([100,200,300,400,500]);
    const[obj,setObj]=useState({frontend:`ReactJs`,backend:`NodeJs`,database:`MongoDB`});
    const[products,setProducts]=useState([

        {p_id:111,p_name:`p_one`,p_cost:10000},
        {p_id:222,p_name:`p_two`,p_cost:20000},
        {p_id:333,p_name:`p_three`,p_cost:30000}]

    );

    return(

        <>

          {
            arr1.map((element,index)=>{

                return(<h1 key={index}>{element}</h1>)
            })
          }

          <h1>{obj.frontend}...{obj.backend}...{obj.database}...</h1>




        {
            flag?(<div>
                <h1>{str}</h1>
          <h1>{num}</h1>
          </div>):
          (<div><h1>Empty</h1></div>)
        }


        <table border={1}
               align="center"
               cellspacing={10}
               cellpadding={10}>

            <thead>
                <tr>
                    <th>p_id</th>
                    <th>p_name</th>
                    <th>p_cost</th>
                </tr>
            </thead>

            <tbody>
                {
                    products.map((element,index)=>{

                        return(
                            <tr key={index}>

                                <td>{element.p_id}</td>
                                <td>{element.p_name}</td>
                                <td>{element.p_cost}</td>


                            </tr>
                            )
                        })
                    }
                </tbody>
    
            </table>
    
    
              
            
            
            </>
    
    
        )
    
    
    }
    export default State;

