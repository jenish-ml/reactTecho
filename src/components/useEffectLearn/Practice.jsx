import React, { useEffect, useState } from 'react'

const Practice = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count Value Updated");
    },[count])

  return (
    <>
        <h1> Count : {count}</h1>
        <button onClick ={() => setCount(count + 1)}>Increment</button>
        <button onClick ={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset </button>
    </>
  )
}

export default Practice