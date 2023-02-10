import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 150;

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
}
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

const LogginButton = ({ loginAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

// ? (Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => no renderiza la expresión



const OptionalRender = () => {
    const [access, setAcces] = useState(false)
    const [nMessages, setNMessages] = useState(0)

    // const updateAccess = () => {
    //     setAcces(!access)
    // }

    const loginAction = () => {
        setAcces(true)
    }

    const logoutAction = () => {
        setAcces(false)
    }

    let optionalButton;

    // if (access) {
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // } else {
    //     optionalButton = <button onClick={updateAccess}>Login</button>
    // }

    if (access) {
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    } else {
        optionalButton = <LogginButton propStyle={loggedStyle} loginAction={loginAction}></LogginButton>
    }


    // Unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1)
    }

    return (
        <div>
            {/* Optional Button */}
            {optionalButton}
            {/* N messages unread */}
            {/* {nMessages > 0 && <p>You have {nMessages} new Messages...</p>}
            {nMessages === 0 && <p>There are no new Messages</p>} */}
            {/* ternay Operator */}
            {access ? (
                <div>
                    {nMessages > 0 ? <p>You have {nMessages} new Message{nMessages > 1 ? 's' : null}...</p> : <p>There are no new Messages</p>}
                    <button onClick={addMessages}>{nMessages === 0 ? 'Add your first Message' : ' Add new Message'}</button>
                </div>
            ) : null}
        </div>
    );
}

export default OptionalRender;
