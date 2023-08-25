
import React from 'react'

type TableType = {
    data:any[],
    cols:any[],
}


export default function Table(props:TableType) {
const{data , cols} = props 

  return (
    <div>
    <table border={1}>
        <thead>
        <tr>
            {cols.map((x,i)=>{
                return(
                 <th key={i}>{x.heading}</th>
                )
            })}
             </tr>
        </thead>
        <tbody>
            {data.map((x,i)=>{
               return(
                <tr >
                    {cols.map((y,j)=>{
return(
    <td onClick={()=>alert(x[y.key])
    }>{x[y.key]}</td>
)
                    })}
                </tr>
               ) 
            })}
        </tbody>
        </table>  
    </div>
  )
}
