import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);
    return () =>{
        clearInterval(interval);  
    } 
  }, []);

  return <h3>{date.toLocaleTimeString()}</h3>;
}
