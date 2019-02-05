import React, { Component } from 'react';
import './Task.css'
import { Button} from 'react-bootstrap';

class TaskComponent extends Component {
   
    render() {
        let {task, deleteTask,markTask} = this.props;
        console.log("task",task);
        return (
            <div>
                <span onClick={()=>{
                    markTask(task.id)
                }} className={task.completed === true ? "completed":""}>
                {task.name} 
                </span>
                <Button variant="danger" type="submit" onClick={()=>{
                    deleteTask(task.id);
                }}> X </Button>
            </div>
        );
    }
}

export const Task = TaskComponent
