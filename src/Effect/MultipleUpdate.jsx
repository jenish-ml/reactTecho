import { useEffect, useState} from 'react'

const MultipleUpdate = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Techolas');
  
      useEffect(()=> {
          console.log("Effect Occurs");
      },[count, name]);
  
    return (
      <>
          <h1>Count : {count}</h1>
          <button onClick = {() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count-1)}>Decrement</button>
          <button onClick={() => setCount(0)}>reset</button>

          <h1>Name : {name}</h1>
          <button onClick={()=> setName((prev) => (prev === "Techolas" ? "Jenish" : "Techolas"))}>Change</button>
      </>
    )
}

export default MultipleUpdate