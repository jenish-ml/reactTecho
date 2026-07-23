import React from 'react'

const Status = (props) => {

    
  return (
    <div>
        <p>{props.isLoggedIn ? "User is logged in" : "User is logged out"}</p>
    </div>
  )
}

export default Status