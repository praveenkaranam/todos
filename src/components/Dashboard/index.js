
import React, { PureComponent } from "react";
import "./index.css"
import ApiService from "../../service/ApiService";
import Button from "../Button";
import Input from "../Input";

class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            todos: null,
            taskName: '',
            showTaskName: false
        }
    }

    deleteTask(index) {
        console.log(index)
        ApiService.delete('', {id:index}).then(response=>{
            this.getToDos();
        })
    }

    saveTaskDetails() {
        ApiService.post('', this.state.taskName).then(
            response => {
                this.setState({ taskName: '', showTaskName: false });
                this.getToDos();
            }
        )
    }

    getToDos() {
        ApiService.get().then(response => {
            this.setState({ todos: response });
        })
    }

    componentDidMount() {
        this.getToDos();
    }

    render() {
        let { showTaskName, taskName, todos } = this.state;
        let data = null;
        if (todos) {
            data = todos.map((todo, index) => {
                return <tr key={todo}>
                    <td>{todo}</td>
                    <td><Button value="Delete" onClick={() => {this.deleteTask(index) }}></Button></td>
                </tr>
            });
        }
        return (
            <div className="view-height pt-3">
                <div className="container px-5">
                    {
                        !showTaskName &&
                        <div>
                            <div className="row d-flex justify-content-end">
                                <div className="col-md-2 ">
                                    <Button value="Add"
                                        onClick={() => { this.setState({ showTaskName: true }) }}
                                        className="btn btn-sm btn-success" />
                                </div>

                            </div>
                            <div className="row">
                                <table>
                                    <thead>
                                        <tr>
                                            <td>
                                                Task Name
                                            </td>
                                            <td>
                                                Actions
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                    {
                        showTaskName &&
                        <div className="row d-flex">
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-4">
                                <Input
                                    placeholder={"Enter task name"}
                                    id={"txtTaskName"}
                                    value={taskName}
                                    onChange={(value) => { this.setState({ taskName: value }) }} />
                            </div>
                            <div className="col-md-2">
                                <Button value="Save"
                                    onClick={() => { this.saveTaskDetails() }}
                                    className="btn btn-sm btn-success" />
                            </div>
                            <div className="col-md-3">
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }

}

export default Dashboard;