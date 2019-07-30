import React from 'react';
import { Breadcrumb } from '../Components';
import { renderRoutes } from 'react-router-config';
import Counter from './counter';

const Tool = ({ route, location }) => {
    document.title = 'Tools';

    return (
        <div>
            <h1 className='py-3'>Tools</h1>

            <Breadcrumb locationPath={location.pathname} addHomeToFirstPath={true} />

            {renderRoutes(route.routes)}
        </div>
    );
};

export { Counter, Tool as default }