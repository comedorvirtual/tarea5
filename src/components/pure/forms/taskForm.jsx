import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'

const taskSchema = Yup.object().shape(
    {
        name: Yup.string().required('Name is required'),
        description: Yup.string().required('Description is required'),
        level: Yup.string().required('Level is required')
    }
)

const TaskForm = ({ add, length }) => {
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef('NORMAL')



    function addTask(e) {
        // e.preventDefault();
        console.log(e);

        const newTask = {
            "name": e.name, "description": e.description, "level": e.level, "completed": false
        }
        add(newTask)
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }
    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }
    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    const initialCredentials = {
        name: '',
        description: '',
        level: '',

    }
    return (
        <Formik
            initialValues={initialCredentials}
            validationSchema={taskSchema}
            // onSubmit={() => {
            //     console.log("aglo")
            // }}
            onSubmit={async (values) => {
                console.log(values)
                addTask(values);
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    isSumitting,
                    handleChange,
                    handleBlur
                } = props;
                return (
                    <Form>
                        <div className='form-outline flex-fill'>
                            <Field id='name' name="name" type='text' className='form-control form-control-lg' placeholder='Task Name' />
                            {
                                errors.name && touched.name &&
                                (
                                    <div className='error'>
                                        <p>{errors.name}</p>
                                    </div>
                                )
                            }
                            <Field id='description' name="description" type='text' className='form-control form-control-lg' placeholder='Task Description' />
                            {
                                errors.description && touched.description &&
                                (
                                    <div className='error'>
                                        <p>{errors.description}</p>
                                    </div>
                                )
                            }
                            <label htmlFor='selectLevel' className='sr-only'></label>
                            <Field as="select"  name="level" className='form-control form-control-lg'>
                                <option style={normalStyle} value='NORMAL'>
                                    Normal
                                </option>
                                <option style={urgentStyle} value='URGENT'>
                                    Urgent
                                </option>
                                <option style={blockingStyle} value='BLOCKING'>
                                    Blocking
                                </option>
                            </Field>
                            {
                                errors.level && touched.level &&
                                (
                                    <div className='error'>
                                        <p>{errors.level}</p>
                                    </div>
                                )
                            }
                            <button type='submit' className='btn btn-success btn-lg ms-2'>
                                {length > 0 ? 'Add New Task' : 'Create your first task'}
                            </button>
                        </div>
                    </Form>
                )
            }
            }

        </Formik>

        // <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>

        // </form>
    );
}

TaskForm.protoType = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
}

export default TaskForm;
