import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Task } from './Task/Task'
import {Filters} from './Filters/Filters'
const uuidv4 = require('uuid/v4');
class TodoComponent extends Component {

    state = {
        tasks: [
            {
                id: uuidv4(),
                name: "Eat",
                completed: true
            },
            {
                id: uuidv4(), name: "Sleep",
                completed: true
            },
            {
                id: uuidv4(), name: "Repeat",
                completed: false
            }
        ],
        filterType:"ALL"
    }

    filterTodos = ()=> {
        let tasks = this.state.tasks;
        tasks = tasks.filter((task) => {
            if (this.state.filterType ==="COMPLETED" &&  task.completed === true) {
                return true;
            }
            if (this.state.filterType==="NOT_COMPLETED" && task.completed === false ) {
                return true;
            }
            if (this.state.filterType=== "ALL") {
                return true;
            }
            return false;
        });
        return tasks;
    }

    setFilterType = (type)=> {
        this.setState({filterType:type});
    }

    deleteTask = (taskId) => {
        let tasks = this.state.tasks;
        tasks = tasks.filter((task) => {
            if (task.id === taskId) {
                return false;
            }
            return true;
        });
        this.setState({ tasks: tasks });
    }

    markTask = (taskId) => {
        let tasks = this.state.tasks;
        tasks = tasks.map((task) => {
            if (task.id === taskId) {
                task.completed = !task.completed;
            }
            return task;
        });
        this.setState({ tasks: tasks });
    }

    render() {
        console.log(this.state);
console.log("filtered",this.filterTodos());
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>New Task: </Form.Label>
                        <Form.Control type="text" value={this.state.newTask} placeholder="Enter new task" onChange={(event) => {
                            this.setState({
                                newTask: event.target.value
                            })
                        }} />

                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={(event) => {
                        let tasks = this.state.tasks;
                        let newTask = {
                            id: uuidv4(),
                            name: this.state.newTask,
                            completed: false
                        }
                        tasks.push(newTask);
                        this.setState({
                            tasks: tasks,
                            newTask: ''
                        })
                        event.preventDefault();
                    }}>
                        Add Task
  </Button>
                    <br/>
                    <Filters setFilterType={this.setFilterType}/>
                </Form>
                {
                    this.filterTodos().map((task,index) => {
                        return (
                            <Task key={index} task={task} deleteTask={this.deleteTask} markTask={this.markTask} />
                        )
                    })
                }

            </div>
        );
    }
}

export const Todo = TodoComponent
