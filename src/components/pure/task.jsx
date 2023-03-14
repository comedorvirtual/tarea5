import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/task.scss';



const TaskComponent = ({ task, completed, remove }) => {

    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Task : ${task.name} is going to unmount`);
        };
    }, [task]);

    function taskLevelBadge() {
        switch (task.level) {
            case 'NORMAL':
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
            case 'URGENT':
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )
            case 'BLOCKING':
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )
            default:
                break;
        }
    }

    function taskCompletedIcon() {
        if(task.completed){
            return (<i onClick={() => completed(task)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>)
        }else{
            return (<i onClick={() => completed(task)} className='bi-toggle-off task-action' style={{ color: 'grey' }}></i>)
        }
    }

    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }
    const taskPending = {
        color: 'tomato',
        fontWeight: 'bold',
    }

    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Execution of fuction to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskCompletedIcon()}
                <i className='bi-trash task-action' onClick={()=> remove(task)} style={{color: 'tomato'}}></i>
            </td>
        </tr>
    );
}

TaskComponent.propTypes = {
    // task: PropTypes.instanceOf(Task)
    completed: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default TaskComponent;
