import React from 'react'
import Child from './Child'

const Parent = () => {
    const [name, setName] = React.useState('React')
  return (
    <>
    <div>Parent {name}</div>

        <Child props={name}/>
    </>
  )
}

export default Parent