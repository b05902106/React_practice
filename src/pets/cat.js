import React from "react";
import cat_img from "../imgs/cat.jpg";

const Cat = () => {
    return (
        <div>
            <h3>Cat</h3>
            <img src={cat_img} alt='This is a cat.' />
        </div>
    )
};

export default Cat;