import React from 'react'
import { useState, useEffect } from 'react';

const Effect = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log("Effect Occurs");
    });

  return (
    <>
        <h1>Count : {count}</h1>
        <button onClick = {() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
        <button onClick={() => setCount(0)}>reset</button>
    </>
  )
}

export default Effect