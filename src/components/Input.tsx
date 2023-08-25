
import React from 'react'
type inputType ={
hold:string,

}

export default function Input(props:inputType) {
    const{hold } = props;
  return (
    <div>
      <input onChange={(e)=>{
console.log(e.target.value)
      }} placeholder={hold} type="text" />








    </div>
  )
}
