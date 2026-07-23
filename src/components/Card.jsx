import React from 'react'

const Card = (props) => {
    
  return (
    <>
        <div style={{ border: '1px solid black',margin: '5px'}}>
            <h1>Hello {props.name}</h1>
            <h3>Age: {props.age}</h3><h3>Place: {props.place}</h3>
        </div>
    </>
  )
}

export default Card