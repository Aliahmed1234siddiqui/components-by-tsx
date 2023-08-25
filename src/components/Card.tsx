import '../App.css';
import React from 'react'
type cardType ={
  
dat :any[],
}

export default function Card(props:cardType) {
    const{ dat}=props
  return (
    <div>
        {dat.map((x,i)=>{
     return(
        <div className='card'>
            <h1>{x.name}</h1>
            <p>{x.id}</p>
            <p>{x.class}</p>
            <p>{x.userId}</p>
        </div>
     )
      })}
    </div>
  )
}
