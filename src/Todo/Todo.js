import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Task } from './Task/Task'
import { Filters } from './Filters/Filters'
import { connect } from 'react-redux'
import { addTodoAction } from './actions/todoActions';
const uuidv4 = require('uuid/v4');
class TodoComponent extends Component {

    state = {
        filterType: "ALL"
    }

    filterTodos = (tasks) => {
        tasks = tasks.filter((task) => {
            if (this.state.filterType === "COMPLETED" && task.completed === true) {
                return true;
            }
            if (this.state.filterType === "NOT_COMPLETED" && task.completed === false) {
                return true;
            }
            if (this.state.filterType === "ALL") {
                return true;
            }
            return false;
        });
        console.log("filtered tasks  ", tasks);
        return tasks;
    }

    setFilterType = (type) => {
        this.setState({ filterType: type });
    }

    render() {
        console.log(' props : ', this.props);
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
                        let newTask = {
                            id: uuidv4(),
                            name: this.state.newTask,
                            completed: false
                        }
                        this.props.dispatch(addTodoAction(newTask));

                        this.setState({
                            newTask: ''
                        })
                        event.preventDefault();
                    }}>
                        Add Task
  </Button>
                    <br />
                    <Filters setFilterType={this.setFilterType} />
                </Form>
                {
                    this.filterTodos(this.props.tasks).map((task, index) => {
                        console.log('render task  ',task);
                        return (
                            <Task key={index} task={task} />
                        )
                    })
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    let tasks = state.tasks;

    console.log(' in mapStateToProps ', state);
    console.log(' tasks in mapStateToProps', tasks);
    return { tasks }
}

// Maps `dispatch` to `props`:
function mapDispatchToProps(dispatch) {
    console.log(' in mapDispatchToProps ', dispatch);

    return { dispatch };
}

//   // Connect them:
//   export default connect(mapState, mapDispatch)(App)

export const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoComponent)
