import React from 'react'

function AddTasks({todo, index, delTodo}) {
  return (
    <div className="display-container">
        <p>{todo}</p>
        <div className='actions'>
          <input type="checkbox" id='task-check' />
          <button id='btn-delete' onClick={() =>delTodo(index)}>Delete</button>
        </div>
    </div>
  )
}

export default AddTasks
