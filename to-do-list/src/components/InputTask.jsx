import React from 'react'
import DisplayTask from './DisplayTask'

const InputTask = () => {

  return (
    <div className="input-container">
        <input type="text" placeholder='Enter your task...' id='task-input' required />
        <button id='btn-add-task' onClick={DisplayTask}>Add Task</button>
    </div>
  )
}

export default InputTask
