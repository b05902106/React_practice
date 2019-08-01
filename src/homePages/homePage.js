import React, { useState } from "react";
import TodoList from "./todoList";

const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleString());

    setInterval((() => setTime(new Date().toLocaleString())), 1000);

    return (
        <h2 className="py-4">The time is {time}</h2>
    );
};

const HomePage = () => {
    document.title = "Home";
    return (
        <div>
            <h1 className="py-3">Welcome to my <font color="orange">websites.</font></h1>
            <Time />
            <TodoList />
        </div>
    );
};

export default HomePage;