import React from 'react'

function DisplayTask() {
  return (
    <div className="display-container">
        <p></p>
        <div className='actions'>
          <input type="checkbox" id='task-check' />
          <button id='btn-delete'>Delete</button>
        </div>
    </div>
    )
}

export default DisplayTask
