import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { Button } from 'bootstrap';

const TaskForm = ({add}) => {
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef('NORMAL')

    function addTask(e) {
        e.preventDefault();
        const newTask = {
            "name": nameRef.current.value, "description": descriptionRef.current.value, "level": levelRef.current.value, "completed": false
        }
        add(newTask)
    }
    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
           <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name' />
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task Description'/>
                <label htmlFor='selectLevel' className='sr-only'>Priority</label>
                <select ref={levelRef} defaultValue='Normal' id='selectLevel'>
                    <option value='NORMAL'>
                        Normal
                    </option>
                    <option value='URGENT'>
                        Urgent
                    </option>
                    <option value='BLOCKING'>
                        Blocking
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
           </div> 
        </form>
    );
}

TaskForm.protoType = {
    add: PropTypes.func.isRequired
}

export default TaskForm;
