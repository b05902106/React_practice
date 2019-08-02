import React from 'react';
import { Breadcrumb } from '../Components';
import { renderRoutes } from 'react-router-config';
import BackgroundColorChange from "./backgroundColorChange";

const Other = ({ route, location }) => {
    document.title = 'Others';

    return (
        <div>
            <Breadcrumb locationPath={location.pathname} addHomeToFirstPath={true} />

            <h1 className='py-3'>Others</h1>

            {renderRoutes(route.routes)}
        </div>
    );
};

export { BackgroundColorChange, Other as default }