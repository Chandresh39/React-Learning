import React from 'react'

const App = () => {
  return (
    <>
    <div className="todo-input">
      <h1>TO DO LIST</h1>
      <input type="text" placeholder="Enter your task..." />
      <button>Add Task</button>
    </div>

    <div className="task-display">
      <p>listen music</p>
      <div className="actions">
        <input type="checkbox" id="completed-task" />
        <button>Delete</button>
      </div>
    </div>
    </>
  )
}

export default App
