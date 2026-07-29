import { useState } from 'react'
import Second from './Second'

const First = () => {
    const [name, setName] = useState('React')
  return (
    <div style = {{border: '1px solid black',margin: '5px', height:'200px'}}>First : {name}

    <Second props={name} />
    </div>
  )
}

export default First