# Props & Reusable Components

### App.jsx

```jsx
<EmpInfo empName="John" empAge={25} empSalary={25000} />
<EmpInfo empName="Johnny" empAge={20} />
```

### EmpInfo.jsx

```jsx
function EmpInfo({ empName, empAge, empSalary = 15000 }) {
  return (
    <div className="container">
      <p>Employee name is {empName}.</p>
      <p>{empName} is {empAge} years old.</p>
      <p>{empName}'s monthly salary is {empSalary}.</p>
    </div>
  );
}
```