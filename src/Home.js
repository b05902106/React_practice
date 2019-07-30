import React from "react";
import { renderRoutes } from 'react-router-config';
import routes from "./routes";
import { Navbar } from "./Components";

const Home = () => {
    return (
        <div className="container">
            <Navbar />
            {renderRoutes(routes)}
        </div>
    );
};

export default Home;