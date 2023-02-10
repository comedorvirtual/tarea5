import React, { useRef, useState } from 'react';

let red = 20;
let green = 40;
let blue = 10;

var squareStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    width: '255px',
    height: '255px'
}

const PlaySquare = ({ PlayAction, propStyle, StopStyle, PlayStyle, divRef }) => {
    return (
        <div ref={divRef} onDoubleClick={PlayAction} onMouseLeave={StopStyle} onMouseOver={PlayStyle} style={propStyle}></div>
    )
}

const StopSquare = ({ StopAction, propStyle, divRef }) => {
    return (
        <div ref={divRef} onDoubleClick={StopAction} style={propStyle} ></div>
    )
}

const SquareRender = () => {

    const [action, setAction] = useState(true);
    const divRef = useRef('')
    const divRef2 = useRef('')

    let colorInterval;

    const PlayAction = () => {
        setAction(!action)
        clearInterval(colorInterval)
    }

    const StopStyle = () => {
        clearInterval(colorInterval)
    }

    const PlayStyle = (ref) => {
        console.log("ssstopp square", action)
        colorInterval = setInterval(() => {
            console.log("entro intervalo");
            red = Math.floor(Math.random() * 255);
            green = Math.floor(Math.random() * 255);
            blue = Math.floor(Math.random() * 255);
            divRef.current.style.backgroundColor = `rgb(${red},${green},${blue})`

            squareStyle = {
                backgroundColor: `rgb(${red},${green},${blue})`,
                width: '255px',
                height: '255px'
            }
            
        }, 1500);
    }

    let squareOptional;

    if (action) {
        console.log("entro if");
        squareOptional = <PlaySquare propStyle={squareStyle} PlayAction={PlayAction} PlayStyle={PlayStyle} StopStyle={StopStyle} divRef={divRef}></PlaySquare>

    } else {
        console.log("entro else");
        squareOptional = <StopSquare propStyle={squareStyle} StopAction={PlayAction} divRef={divRef} ></StopSquare>;
    }

    return (
        <div>
            {squareOptional}
        </div>
    );
}

export default SquareRender;
