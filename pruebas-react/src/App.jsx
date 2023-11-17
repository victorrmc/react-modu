import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0)
  useEffect(() => {
    console.log(time)
    setInterval(cambiarTiempo, 1000)
    return () => {
      clearInterval(intervalId);
    };
  },[])
 const cambiarTiempo = () => {
    const horaActual = new Date();
    setTime( horaActual.getHours() + ":" +horaActual.getMinutes() + ":" +horaActual.getSeconds().toString())
 }
  return (
    <>
    <h1>Son las : {time}</h1>
    </>
  );
}

export default App;
