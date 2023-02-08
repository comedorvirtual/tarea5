import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


const ContactComponent = ({contact, completed, remove }) => {
    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Contact : ${contact.name} is going to unmount`);
        };
    }, [contact]);

    function taskCompletedIcon() {
        if(contact.completed){
            return (<i onClick={() => completed(contact)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>)
        }else{
            return (<i onClick={() => completed(contact)} className='bi-toggle-off task-action' style={{ color: 'grey' }}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{contact.last_name}</span>
            </td>
            <td className='align-middle'>
                <span className='ms-2'>{contact.email}</span>
            </td>
            <td className='align-middle'>
                {taskCompletedIcon()}
                <i className='bi-trash task-action' onClick={()=> remove(contact)} style={{color: 'tomato'}}></i>
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    completed: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
