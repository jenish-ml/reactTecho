import React from 'react'
import Two from './Two'
import { useContext } from 'react'
import { NameContext } from '../App';

const One = () => {
    const name = useContext(NameContext);
    console.log(name);
    
  return (
    <div>
        One : {name}
    <Two />

    </div>
  )
}

export default One