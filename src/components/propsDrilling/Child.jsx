import React from 'react'
import GrandChild from './GrandChild'

const Child = ({props}) => {
  return (
    <>
    <div>Child</div>
        <GrandChild props = {props}/>
    </>
  )
}

export default Child