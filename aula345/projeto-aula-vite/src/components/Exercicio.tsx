import {useState, useEffect} from 'react';

function CounterTime() {
    const [counter, setCounter] = useState(0)
    const [Pause, setPause] = useState(false)
   
    useEffect (() => {
        const interval = setInterval(() => {
            if (!Pause){
            setCounter(counter + 1);
            }
        }, 1000);
        return (() => clearInterval(interval));
    }, [counter, Pause]);

    return <div><p>Contador:{counter}</p>
        <button onClick={() => setPause(!Pause)}>{Pause ? "Resume" : "Pause"}</button>
    </div>
}

export default CounterTime