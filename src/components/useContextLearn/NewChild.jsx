import React from 'react'
import NewGrantChild from './NewGrantChild'
import { useContext } from 'react';
import { NameContext } from '../../App';

const NewChild = () => {
    const name = useContext(NameContext);

  return (
    <>
        <div>NewChild { name }</div>
        <NewGrantChild />
    </>
  )
}

export default NewChild