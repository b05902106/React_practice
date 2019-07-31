import React from "react";

const BackgroundColorChange = () => {

    const random = (num) => { return Math.floor(Math.random() * num + 1); }

    const colorChange = () => {
        let randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        document.body.style.backgroundColor = randomColor;
    }

    const light = () => {
        document.body.style.backgroundColor = 'rgb(255,255,255)';
    }

    return (
        <>
            <button type="button" class="btn btn-light" onClick={light}>Light</button>
            {/* <button type="button" class="btn btn-dark" onClick = {dark}>Dark</button> */}
            <br />
            <button type="button" class="btn btn-danger btn-lg" onClick={colorChange} style={{ margin: "10% 0 0 50%" }}>Click me !</button>
        </>
    )
}

export default BackgroundColorChange;