import { useEffect, useState} from "react";

const Mount = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Techolas");
    const [users, setUsers] = useState([]);
    useEffect(() => {
      setInterval(()=>{
        console.log("Running");
      },1000);

      
    },[])
  return (
    <div>
        <h1>Count : {count}</h1>

        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset </button>

        <h3>Name : {name}</h3>
        <button onClick={()=> setName((prev) => (prev === "Techolas" ? "Jenish" : "Techolas"))}>Change</button>
        
    </div>
  )
}

export default Mount