import React from "react";

const BackgroundColorChange = () => {

    const random = (num) => { return Math.floor(Math.random() * num + 1); }

    const colorChange = () => {
        let randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        document.body.style.backgroundColor = randomColor;
    }

    const light = () => {
        document.body.style.backgroundColor = 'rgb(255,255,255)';
        document.body.style.color = 'rgb(0,0,0)';
    }

    const dark = () => {
        document.body.style.backgroundColor = 'rgb(45,45,45)';
        document.body.style.color = 'rgb(255,255,255)';
    }

    return (
        <>
            <button type="button" className="btn btn-light" onClick={light}>Light</button>
            <button type="button" className="btn btn-dark" onClick={dark}>Dark</button>
            <br />
            <button type="button" className="btn btn-danger btn-lg" onClick={colorChange} style={{ margin: "10% 0 0 50%" }}>Click me !</button>
        </>
    )
}

export default BackgroundColorChange;