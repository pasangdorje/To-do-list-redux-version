import { connect } from 'react-redux';
import AddListForm from './AddListForm';
import React, { Component } from 'react';
import ToDoList from '../components/ToDoList/ToDoList';
import AddToList from '../components/buttons/AddToList';
import ResetList from '../components/buttons/ResetList';
import * as actions from '../redux/actions';

class ToDo extends Component {
  componentDidMount() {
    this.getDataFromLocal();
  }

  componentDidUpdate() {
    this.setDataToLocal();
  }

  getDataFromLocal = () => {
    if ('data' in localStorage) {
      this.setLocalToStore(JSON.parse(localStorage.getItem('data')));
    }
  };

  setLocalToStore = data => {
    this.props.setFormStatus(data.formStatus);
    this.props.setTaskCounter(data.taskCounter);
    this.props.setList(data.toDoList);
  };

  setDataToLocal = () => {
    localStorage.setItem('data', JSON.stringify(this.createLocalData()));
  };

  createLocalData = () => {
    return {
      formStatus: this.props.formStatus,
      taskCounter: this.props.taskCounter,
      toDoList: this.props.toDoList
    };
  };

  handleFormSubmit = (e, formData) => {
    e.preventDefault();
    this.props.addToDo(this.createNewTask(formData));
    this.props.toggleFormStatus();
  };

  createNewTask = formData => {
    this.props.increaseTaskCounter();
    return {
      id: this.props.taskCounter + 1,
      task: formData.task,
      daysAssigned: formData.daysAssigned,
      issueTimeStamp: new Date().getTime(),
      isDone: false
    };
  };

  handleActions = (itemId, action) => {
    let list = [...this.props.toDoList];
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
    this.props.setList(list);
  };

  toggleForm = () => {
    this.props.toggleFormStatus();
  };

  resetList = () => {
    this.props.resetTaskCounter();
    this.props.resetFormStatus();
    this.props.resetList();
  };

  render() {
    return (
      <div className="to-do-container">
        <h2>To Do List</h2>
        <AddToList onClick={this.toggleForm} />
        <ResetList onClick={this.resetList} />
        <AddListForm
          formStatus={this.props.formStatus}
          onFormSubmit={this.handleFormSubmit}
          onCancel={this.toggleForm}
        />
        <ToDoList
          toDoList={this.props.toDoList}
          onActionPerformed={this.handleActions}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskCounter: state.taskCounter,
    formStatus: state.formStatus,
    toDoList: state.toDoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseTaskCounter: () => dispatch(actions.increaseTaskCounter()),
    resetTaskCounter: () => dispatch(actions.resetTaskCounter()),
    setTaskCounter: localData => dispatch(actions.setTaskCounter(localData)),
    toggleFormStatus: () => dispatch(actions.toggleFormStatus()),
    resetFormStatus: () => dispatch(actions.resetFormStatus()),
    setFormStatus: localData => dispatch(actions.setFormStatus(localData)),
    addToDo: newTask => dispatch(actions.addToDo(newTask)),
    resetList: () => dispatch(actions.resetList()),
    setList: localData => dispatch(actions.setList(localData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
