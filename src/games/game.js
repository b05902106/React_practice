import React from 'react';
import { Breadcrumb } from '../Components';
import { renderRoutes } from 'react-router-config';
import ThreeDoors from './threeDoors';

const Game = ({ route, location }) => {
    document.title = 'Games';

    return (
        <div>
            <h1 className='py-3'>Games</h1>

            <Breadcrumb locationPath={location.pathname} addHomeToFirstPath={true} />

            {renderRoutes(route.routes)}
        </div>
    );
};

export { ThreeDoors, Game as default }