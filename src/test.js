import react, { useState } from 'react';

const Bigfun = () => {

    const [num, setNum] = useState(0);

    const func = () => {
        setNum(1)
        console.log(num);
    }
}