import React, { useState } from 'react';


const Counter = () => {
    document.title = "Counter";
    const [count, setCounter] = useState(0);
    const countUp = () => {
        setCounter(count + 1);
    };
    const countDown = () => {
        setCounter(count - 1)
    };

    return (
        <div>
            Count : {count}
            <br />
            <button onClick={() => setTimeout(() => countUp, 1000)}>count++</button>
            <br />
            <button onClick={countDown}>count--</button>
            <br />
        </div>
    );
}

export default Counter;