import React from 'react'
type typeButton={
label:string,
click: any,
}

export default function Button(props:typeButton) {
  
  const{click , label} = props;
    return (
    <div>

  <button onClick={click} >{label}</button>

    </div>
  )
}
