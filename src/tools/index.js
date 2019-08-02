import React from 'react';
import { Breadcrumb } from '../Components';
import { renderRoutes } from 'react-router-config';
import Counter from './counter';

const Tool = ({ route, location }) => {
    document.title = 'Tools';

    return (
        <div>
            <Breadcrumb locationPath={location.pathname} addHomeToFirstPath={true} />

            <h1 className='py-3'>Tools</h1>

            {renderRoutes(route.routes)}
        </div>
    );
};

export { Counter, Tool as default }