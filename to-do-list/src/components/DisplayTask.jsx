import React from 'react'
import AddTasks from './AddTasks'

function DisplayTask({todoList, delTodo}) {
  return (
    <>
        {
            todoList.map((todo, index) => {
                return (
                    <AddTasks todo={todo} index={index} delTodo={delTodo} />
                )
            })
        }
    </>
    )
}

export default DisplayTask
