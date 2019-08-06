import React, { useState } from 'react';
import Door1 from '../imgs/door1.jpg';
import Door2 from '../imgs/door2.jpg';
import Door3 from '../imgs/door3.jpg';
import Door1_f from '../imgs/door1_f.jpg';
import Door2_f from '../imgs/door2_f.jpg';
import Door3_f from '../imgs/door3_f.jpg';
import WIN from '../imgs/threeDoor_win.jpg';

const ThreeDoors = () => {
    const [answer, setAnswer] = useState(Math.floor(Math.random() * 3));
    console.log('answer: ', answer);

    const [door1, setDoor1] = useState(Door1);
    const [door2, setDoor2] = useState(Door2);
    const [door3, setDoor3] = useState(Door3);

    const [text, setText] = useState('There are three doors. choose 1');
    const [gameState, setGameState] = useState(0);
    const [winGame, setWinGame] = useState(0);
    const [clicked, setClicked] = useState([]);

    const door = [
        {
            state: door1,
            change: (i) => { i ? setDoor1(Door1_f) : setDoor1(Door1) },
        },
        {
            state: door2,
            change: (i) => { i ? setDoor2(Door2_f) : setDoor2(Door2) },
        },
        {
            state: door3,
            change: (i) => { i ? setDoor3(Door3_f) : setDoor3(Door3) },
        }
    ]

    const changeDoor = (i) => {
        if (clicked.indexOf(i) !== -1 || gameState === 2) {
            return;
        }

        if (!gameState) {
            const otherDoor = [0, 1, 2].filter((item) => { return item !== i });
            const openDoorInOtherDoor = Math.floor(Math.random() * 2);
            const openDoor = otherDoor[openDoorInOtherDoor] !== answer ? otherDoor[openDoorInOtherDoor] : otherDoor[+!openDoorInOtherDoor];
            door[openDoor].change(1);
            setClicked([...door, openDoor]);
            setGameState(1);
            setText('Give you a chance to change.');
        }
        else {
            setGameState(2);
            if (i === answer) {
                setText('You win !!');
                setWinGame(1);
            }
            else {
                door[i].change(1);
                setText('You lose QQ');
            }
        }
    };

    const resetGame = () => {
        setWinGame(0);
        setGameState(0);
        setAnswer(Math.floor(Math.random() * 3));
        setText('There are three doors. choose 1');
        setClicked([]);
        door.forEach((item) => {
            item.change(0);
        })
    };

    return (
        <div>
            <h3 style={{ color: 'orange', textAlign: "center" }}>{text}</h3>
            {!winGame ?
                <>
                    <img src={door[0].state} onClick={() => changeDoor(0)} alt='door1' width='100' height='250' style={{ margin: "5% 5% 0 25%" }} />
                    <img src={door[1].state} onClick={() => changeDoor(1)} alt='door2' width='100' height='250' style={{ margin: "5% 5% 0 5%" }} />
                    <img src={door[2].state} onClick={() => changeDoor(2)} alt='door3' width='100' height='250' style={{ margin: "5% 25% 0 5%" }} />
                </> :
                <img src={WIN} alt='win!' style={{ margin: "0 40% 0 40%" }} />
            }
            <br />
            {gameState === 2 ?
                <button onClick={resetGame}>Again</button>
                :
                <></>
            }
        </div>
    );
}

export default ThreeDoors;