import React from 'react'
import { useContext } from 'react';
import { NameContext } from '../App';

const Three = () => {
  const name = useContext(NameContext);
  return (
    <div>Three : {name}</div>
  )
}

export default Three