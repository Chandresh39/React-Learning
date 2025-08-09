import { useState } from 'react'
import './App.css'
import DisplayTask from './components/DisplayTask'
import InputTask from './components/InputTask'

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  function writeTask(e) {
    setTask(e.target.value);
  }

  function addTask() {
    if (task !== '') {
      setTodoList((prevTodoList) => [...prevTodoList, task]);
      setTask('');
    }
  }

  function delTodo(taskIndex) {
    setTodoList((prevTasks) =>
      prevTasks.filter((_, index) => index !== taskIndex)
    );
  }

  return (
    <>
      <h1>TO-DO-LIST</h1>
      <InputTask task={task} writeTask={writeTask} addTask={addTask} />
      <DisplayTask todoList={todoList} delTodo={delTodo} />
    </>
  )
}

export default App
