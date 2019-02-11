import React, { Component } from 'react';
import './Task.css'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { deleteTodoAction, markAsCompleteTodoAction } from '../actions/todoActions'

class TaskComponent extends Component {

    render() {
        
        let { task } = this.props;
        console.log("task", task);
        return (
            <div>
                <span onClick={() => {
                    this.props.dispatch(markAsCompleteTodoAction(task.id));
                }} className={task.completed === true ? "completed" : ""}>
                    {task.name}
                </span>
                <Button variant="danger" type="submit" onClick={() => {
                    this.props.dispatch(deleteTodoAction(task.id));
                }}> X </Button>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return { dispatch };
}

export const Task = connect(null, mapDispatchToProps)(TaskComponent)
