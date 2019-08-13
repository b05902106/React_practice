import React from 'react';
import { GAMEOVERCOUNT } from '../../constants/initialData';

const GameText = () => {
    return (
        <p>
            We have selected a random number between 1 and 100.
                <br /><br />
            See if you can guess it in {GAMEOVERCOUNT} turns or fewer.
                <br /><br />
            We'll tell you if your guess was too high or too low.
                <br /><br />
        </p>
    );
};

export { GameText };