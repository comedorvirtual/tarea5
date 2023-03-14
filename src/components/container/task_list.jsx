import React, { useEffect, useState } from 'react';
import TaskComponent from '../pure/task';
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    // const defaultTaskL = new Task('Example', 'Default description');
    const task1 = {
        "name": "David", "description": "algo", "level": "NORMAL", "completed": false
    }
    const task2 = {
        "name": "David", "description": "algo", "level": "NORMAL", "completed": false
    }
    const task3 = {
        "name": "David", "description": "algo", "level": "NORMAL", "completed": false
    }
    // const [defaultTask, setDefaultTask] = useState({ "name": "David", "description": "algo", "level": "NORMAL", "completed": false });


    const [tasks, setTasks] = useState([task1, task2, task3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task State has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log('Task Component is going to unmount ...');
        }
    }, [tasks]);

    function completeTask(task) {
        console.log('Complete this Task:', task)
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        // we update the state of the component and it will update the 
        //  Iteration of the tasks in order to show the task update
        setTasks(tempTask);
    }
    function deleteTask(task) {
        console.log('Delete this Task:', task)
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }
    function addTask(task) {
        console.log('Add this Task:', task)
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }
    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent
                                key={(index)}
                                task={task}
                                completed={completeTask}
                                remove={deleteTask}
                            ></TaskComponent>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    let tasksTable;

    if (tasks.length > 0) {
        tasksTable = <Table></Table>
    } else {
        tasksTable = (
            <div>
                <h3>There are no tasks to show</h3>
                <h4>Please, create one</h4>
            </div>
        )
    }
    const loadingStyle = {
        color:'gray',
        fontSize : '30px',
        fontWeight: 'bold',
    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    <div className='card-body' style={{ position: 'relative', height: '400px' }}>
                    {/* TODO: Add Loading Spinner */}
                        {loading ? <p style={loadingStyle}>Loading...</p>: tasksTable}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
    );
}

export default TaskListComponent;
