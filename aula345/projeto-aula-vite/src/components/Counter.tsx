import {useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const IncrementCounter = () => {
        setCounter(counter + 1);
        console.log(counter);
    }
    return <div>
        <p>Counter: {counter}</p>
        <button onClick={IncrementCounter}>Increment</button>
    </div>
}

export default Counter;