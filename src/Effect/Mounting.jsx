import { useEffect, useState } from 'react'

const Mounting = () => {
  const [count, setCount] = useState(0);
  
      useEffect(()=> {
          console.log("Mounting Causes");
      },[]);
  
    return (
      <>
          <h1>Count : {count}</h1>
          <button onClick = {() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count-1)}>Decrement</button>
          <button onClick={() => setCount(0)}>reset</button>
      </>
    )
}

export default Mounting