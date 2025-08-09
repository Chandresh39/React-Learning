import React from 'react'

function InputTask({task, writeTask, addTask}) {
  return (
    <div className="input-container">
        <input type="text" placeholder='Enter your task...' id='task-input' value={task} onChange={writeTask} />
        <button id='btn-add-task'onClick={addTask} >Add Task</button>
    </div>
  )
}

export default InputTask
