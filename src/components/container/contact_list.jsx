import React, { useEffect, useState } from 'react';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';

const ContactListComponent = () => {
    const contact1 = {
        "name": "David", 'last_name':"Peña", "email": "David@hotmail.com", "conected": true
    }
    const contact2 = {
        "name": "Jose", 'last_name':"Lopez", "email": "Jose@hotmail.com", "conected": true
    }
    const contact3 = {
        "name": "Sergio", 'last_name':"Aguero", "email": "Sergio@hotmail.com", "conected": true
    }
    const [contacts, setContacts] = useState([contact1, contact2, contact3])

    useEffect(() => {
        console.log('Contact State has been modified');
        return () => {
            console.log('Contact Component is going to unmount ...');
        }
    }, [contacts]);
    function conectedContact(task) {
        console.log('Complete this Contact:', task)
        const index = contacts.indexOf(task);
        const tempContact = [...contacts];
        tempContact[index].completed = !tempContact[index].completed;
        // we update the state of the component and it will update the 
        //  Iteration of the contacts in order to show the task update
        setContacts(tempContact);
    }
    function deleteContact(task) {
        console.log('Delete this Contact:', task)
        const index = contacts.indexOf(task);
        const tempContact = [...contacts];
        tempContact.splice(index, 1);
        setContacts(tempContact);
    }
    function addContact(task) {
        console.log('Add this Contact:', task)
        const tempContact = [...contacts];
        tempContact.push(task);
        setContacts(tempContact);
    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Contacts:
                        </h5>
                    </div>
                    <div className='card-body' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Last Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent
                                            key={(index)}
                                            contact={contact}
                                            completed={conectedContact}
                                            remove={deleteContact}
                                        ></ContactComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
}

export default ContactListComponent;
