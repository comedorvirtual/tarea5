import React, { useRef } from 'react';
import PropTypes from 'prop-types';


const ContactForm = ({add}) => {
    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')


    function addTask(e) {
        e.preventDefault();
        const newTask = {
            "name": nameRef.current.value, "last_name": lastNameRef.current.value, "email": emailRef.current.value, "completed": false
        }
        add(newTask)
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
           <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Name' />
                <input ref={lastNameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Last Name' />
                <input ref={emailRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Email'/>
                <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
           </div> 
        </form>
    );
};


ContactForm.propTypes = {

};


export default ContactForm;
