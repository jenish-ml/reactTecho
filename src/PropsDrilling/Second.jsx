import React from 'react'
import Third from './Third'

const Second = (props) => {
    
  return (
    <div style={{ border: '1px solid black',height:'150px' }}>Second 
    <Third name = {props.props} />
    </div>
  )
}

export default Second