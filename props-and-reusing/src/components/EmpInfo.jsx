import React from 'react'

function EmpInfo({empName, empAge, empSalary=15000}) {
  return (
    <div className='container'>
        <p>Employee name is {empName}.</p>
        <p>{empName} {empAge} year old.</p>
        <p>{empName} monthly salary is {empSalary}.</p> 
    </div>
  )
}

export default EmpInfo
