import './App.css'
import EmpInfo from './components/EmpInfo'

function App() {

  return (
    <>
      <h1>Employee Information</h1>
      <EmpInfo empName="John" empAge={25} empSalary={25000} />
      <EmpInfo empName="Johnny" empAge={20} />
    </>
  )
}

export default App
