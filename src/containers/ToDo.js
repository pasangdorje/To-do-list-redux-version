import React, { Component } from 'react';
import AddToList from '../components/buttons/AddToList';
import ResetList from '../components/buttons/ResetList';
import AddListForm from './AddListForm';
import ToDoList from '../components/ToDoList/ToDoList';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFormStatus, increaseTaskCounter } from '../redux/actions';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      formStatus: false,
      taskCounter: 0
    };
  }

  componentDidMount() {
    this.getDataFromLocal();
  }

  componentDidUpdate() {
    this.setDataToLocal();
  }

  getDataFromLocal = () => {
    if ('data' in localStorage) {
      const data = JSON.parse(localStorage.getItem('data'));

      this.setState({ toDoList: data.toDoList, taskCounter: data.taskCounter });
    }
  };

  setDataToLocal = () => {
    localStorage.setItem('data', JSON.stringify(this.state));
  };

  handleFormSubmit = (e, formData) => {
    e.preventDefault();
    const newTask = {
      id: this.state.taskCounter + 1,
      task: formData.task,
      daysAssigned: formData.daysAssigned,
      issueTimeStamp: new Date().getTime(),
      isDone: false
    };
    const newTaskList = this.state.toDoList;
    newTaskList.push(newTask);
    this.setState(prevState => ({
      toDoList: newTaskList,
      formStatus: false,
      taskCounter: prevState.taskCounter + 1
    }));
  };

  handleActions = (itemId, action) => {
    let list = [...this.state.toDoList];
    let matchedIndex;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === itemId) matchedIndex = i;
    }

    switch (action) {
      case 'checkbox':
        list[matchedIndex].isDone = !list[matchedIndex].isDone;
        break;
      case 'edit':
        break;
      case 'delete':
        list.splice(matchedIndex, 1);
        break;
      default:
        break;
    }
    this.setState({ toDoList: list });
  };

  toggleForm = () => {
    this.setState({ formStatus: !this.state.formStatus });
  };

  resetList = () => {
    this.setState({ toDoList: [], formStatus: false, taskCounter: 0 });
  };

  render() {
    return (
      <div className="to-do-container">
        <h2>To Do List</h2>
        <AddToList onClick={this.toggleForm} />
        <ResetList onClick={this.resetList} />
        <AddListForm
          formStatus={this.state.formStatus}
          onFormSubmit={this.handleFormSubmit}
          onCancel={this.toggleForm}
        />
        <ToDoList
          toDoList={this.state.toDoList}
          onActionPerformed={this.handleActions}
        />
      </div>
    );
  }
}

export default ToDo;
