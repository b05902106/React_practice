import React from 'react';
import { Breadcrumb } from '../Components';
import { renderRoutes } from 'react-router-config';

const Other = ({ route, location }) => {
    document.title = 'Others';

    return (
        <div>
            <h1 className='py-3'>Others</h1>

            <Breadcrumb locationPath={location.pathname} addHomeToFirstPath={true} />

            {renderRoutes(route.routes)}
        </div>
    );
};

export { Other as default }