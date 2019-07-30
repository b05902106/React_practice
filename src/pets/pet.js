import React from "react";
import { renderRoutes } from 'react-router-config';
import { Breadcrumb } from "../Components";
import Dog from './dog';
import Cat from './cat';

const Pet = ({ route, location }) => {
    document.title = "Pet";

    return (
        <div>
            <h1 className='py-3'>Pets</h1>

            <Breadcrumb locationPath={location.pathname} addHomeToFirstPath={true} />

            {renderRoutes(route.routes)}
        </div >
    );
};

export { Dog, Cat, Pet as default };