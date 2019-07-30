import React, { useState } from 'react';
import { Breadcrumb } from './Components';


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
            <h1>Counter</h1>
            <Breadcrumb locationPath={location.pathname} addHomeToFirstPath={true} />
            Counter : {count}
            <br></br>
            <button onClick={countUp}>count++</button>
            <br></br>
            <button onClick={countDown}>count--</button>
        </div>
    );
}

export default Counter;