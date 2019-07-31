import React, { useState } from 'react';


const Counter = () => {
    document.title = "Counter";
    const [count, setCounter] = useState(0);
    const countUp = () => {
        //wrong
        // setCounter(count+1);

        //right
        setCounter((count) => { return count + 1 });
    };
    const countDown = () => {
        setCounter((count) => { return count - 1 });
    };

    return (
        <div>
            Count : {count}
            <br />
            <button onClick={countUp}>count++</button>
            <br />
            <button onClick={countDown}>count--</button>
            <br />
        </div>
    );
}

export default Counter;