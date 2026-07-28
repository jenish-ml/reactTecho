import { useEffect, useState } from 'react'

const Updating = () => {
  const [count, setCount] = useState(0);
  
      useEffect(()=> {
          console.log("Updating Occurs");
      }, [count]);
  
    return (
      <>
          <h1>Count : {count}</h1>
          <button onClick = {() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count-1)}>Decrement</button>
          <button onClick={() => setCount(0)}>reset</button>
      </>
    )
}

export default Updating