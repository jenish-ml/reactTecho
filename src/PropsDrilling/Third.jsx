import React from 'react'

const Third = (name) => {
    console.log(name);
    
  return (
    <div style={{border: '1px solid black', height:'100px'}}>Third : {name.name}</div>
  )
}

export default Third