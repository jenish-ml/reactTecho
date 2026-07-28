import { useEffect, useState} from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log("Mounted");
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
        return () => {
            console.log("UnMounted");
            clearInterval(interval);
        };
    }, []);
  return (
    <>
        <h1>{time}</h1>

    </>
  )
}

export default Timer