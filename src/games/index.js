import React from 'react';
import { Breadcrumb } from '../Components';
import { renderRoutes } from 'react-router-config';
import ThreeDoors from './threeDoors';
import GuessNumber from './guessNumber';

const Game = ({ route, location }) => {
    document.title = 'Games';

    return (
        <div>
            <Breadcrumb locationPath={location.pathname} addHomeToFirstPath={true} />

            <h1 className='py-3'>Games</h1>

            {renderRoutes(route.routes)}
        </div>
    );
};

export { ThreeDoors, GuessNumber, Game as default }