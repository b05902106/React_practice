import React from "react";

const HomePage = ({ location }) => {
    document.title = "Home";
    return (
        <div>
            <h1 className="py-3">Welcome to my <font color="orange">websites.</font></h1>
        </div>
    );
};

export default HomePage;