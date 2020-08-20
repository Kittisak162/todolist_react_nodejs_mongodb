import React, { Component } from 'react';
import axios from 'axios';
import { baseApiUrl } from './config';
import DataTable from './components/dataTable';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: '',
      todos: []
    }
  }

  componentDidMount = async () => {
    const response = await axios.get(`${baseApiUrl}/todo`);
    this.setState({ todos: response.data.todos });
  }

  handleChangeTaskName = e => {
    this.setState({ taskName: e.target.value });
  }

  handleSubmitAddTodo = async e => {
    const { taskName, todos } = this.state;
    e.preventDefault();
    const todoData = { taskName }
    const response = await axios.post(`${baseApiUrl}/todo`, { data: todoData });
    todos.push(response.data.todo)
    this.setState({ taskName: '', todos });
  }

  handleChangeTodo = async (key, taskName) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo._id === key);
    if (index > -1)
      todos[index].taskName = taskName;
    this.setState({ todos });
    const todoData = { taskName };
    await axios.put(`${baseApiUrl}/todo/${key}`, { data: todoData });
  }

  handleClickRemoveTodo = async key => {
    const { todos } = this.state;
    await axios.delete(`${baseApiUrl}/todo/${key}`);
    const index = todos.findIndex(todo => todo._id === key);
    if (index > -1)
      todos.splice(index, 1);
    this.setState({ todos });
  }

  render() {
    const { taskName, todos } = this.state;

    return (
      <div className="my-5">
        <div className="container card text-center p-3">
          <h1 className="text-primary my-3">My Todo</h1>
          <form onSubmit={this.handleSubmitAddTodo}>
            <input className="form-control form-control-lg" type="text" placeholder="Input task name then tap Enter to add" value={taskName} onChange={this.handleChangeTaskName} />
          </form>
          <DataTable
            items={todos}
            field="taskName"
            fieldKey="_id"
            onChangeItem={this.handleChangeTodo}
            onRemoveItem={this.handleClickRemoveTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
