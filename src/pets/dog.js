import React from "react";
import dog_img from "../imgs/dog.jpg";

const Dog = () => {
    return (
        <div>
            <h3>Dog</h3>
            <img src={dog_img} alt='This is a dog.' />
        </div>
    )
};

export default Dog;