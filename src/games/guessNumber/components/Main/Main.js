import React from 'react';
import { GameText } from '../GameText';
import { GameInput } from '../GameInput';
import { GameInformation } from '../GameInformation';


const Main = () => {
    return (
        <>
            <GameText />
            <GameInput />
            <GameInformation />
        </>
    );
};

export { Main };