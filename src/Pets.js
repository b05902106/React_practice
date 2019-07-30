import React from "react";
import { renderRoutes } from 'react-router-config';
import dog from './imgs/dog.jpg'
import cat from './imgs/cat.jpg'
import { Breadcrumb } from "./Components";

const Dog = () => {
    return (
        <div>
            <h3>Dog</h3>
            <img src={dog} alt='This is a dog' />
        </div>
    );
};

const Cat = () => {
    return (
        <div>
            <h3>Cat</h3>
            <img src={cat} alt='This is a cat' />
        </div>
    );
};

const Pet = ({ route, location }) => {
    document.title = "Pets";

    return (
        <div>
            <h1 className='py-3'>Pets</h1>

            <Breadcrumb locationPath={location.pathname} addHomeToFirstPath={true} />

            {renderRoutes(route.routes)}
        </div >
    );
};

export { Dog, Cat, Pet as default };