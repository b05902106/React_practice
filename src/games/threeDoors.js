import React, { useState } from 'react';
import Door1 from '../imgs/door1.jpg';
import Door2 from '../imgs/door2.jpg';
import Door3 from '../imgs/door3.jpg';
import Door1_f from '../imgs/door1_f.jpg';
import Door2_f from '../imgs/door2_f.jpg';
import Door3_f from '../imgs/door3_f.jpg';
import Win from '../imgs/win.jpg';

const ThreeDoors = () => {
    const answer = Math.floor(Math.random() * 3) + 1;

    const [door1, setDoor1] = useState(Door1);
    const [door2, setDoor2] = useState(Door2);
    const [door3, setDoor3] = useState(Door3);

    const changeDoor = (i) => {
        const otherDoor = [1, 2, 3].filter((item) => { return item !== i });
    };

    return (
        <div>
            <h3>{answer}</h3>
            <img src={door1} onClick={() => changeDoor(1)} alt='door1' width='100' height='250' />
            <img src={door2} onClick={() => changeDoor(2)} alt='door2' width='100' height='250' />
            <img src={door3} onClick={() => changeDoor(3)} alt='door3' width='100' height='250' />
        </div>
    );
}

export default ThreeDoors;