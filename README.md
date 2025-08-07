# react-js
use for create new project in vite
```
npm create vite@latest
```

#
# Counter App - Increase and Decrease count between 0 to 20.
Use `onClick` Event
```
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
```
Initialize State
```
  const [count, setCount] = useState(0)
```
Conditional Statment
```
  const decrement = () => {
    if (count <= 0){
      return;
    } else{
      setCount(count - 1)
    }
  }

  const increment = () => {
    if (count >= 20){
      return;
    } else {
    setCount(count + 1) 
    }

  }
```
#
# Props and Reusing - Initialize component(fuction) for reuse and manipulate through Props.

```App.jsx
<EmpInfo empName="John" empAge={25} empSalary={25000} />
<EmpInfo empName="Johnny" empAge={20} />
```

```EmpInfo.jsx
function EmpInfo({empName, empAge, empSalary=15000}) {
  return (
    <div className='container'>
        <p>Employee name is {empName}.</p>
        <p>{empName} {empAge} year old.</p>
        <p>{empName} monthly salary is {empSalary}.</p> 
    </div>
  )
}
```