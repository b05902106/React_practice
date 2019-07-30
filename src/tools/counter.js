import React, { useState } from 'react';


const Counter = ({ location }) => {
    document.title = "Counter";
    const [count, setCounter] = useState(0);
    const countUp = () => {
        setCounter(count + 1)
    };
    const countDown = () => {
        setCounter(count - 1)
    };

    return (
        <div>
            Count : {count}
            <br></br>
            <button onClick={countUp}>count++</button>
            <br></br>
            <button onClick={countDown}>count--</button>
        </div>
    );
}

export default Counter;