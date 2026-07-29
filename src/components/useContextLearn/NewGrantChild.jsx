import React from 'react'
import { NameContext } from '../../App';

const NewGrantChild = () => {
    const name = React.useContext(NameContext);
  return (
    <>
        <div>NewGrantChild { name }</div>
    </>
  )
}

export default NewGrantChild