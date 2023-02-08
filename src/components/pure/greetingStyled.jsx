import React, { useState } from 'react';


// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'white'
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold',
};

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);


    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
            { logged ? 
                (<p>Hola, {props.name}</p>)
                :
                (<p>Please Login</p>)    
            }
            <button onClick={() => {
                console.log('Boton pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
