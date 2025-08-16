# React.js Practice Notes  

## 1. Create New Project with Vite  
```bash
npm create vite@latest
````
---

## 2. Counter App — Increase & Decrease Count (0 to 20)

### Initialize State

```jsx
const [count, setCount] = useState(0);
```

---

## 3. Props & Reusable Components

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

---

## 4. IMDB Clone — Tailwind CSS, React Router Setup and API

### Install React Router DOM

📄 [React Router Documentation](https://reactrouter.com/6.30.1/start/tutorial)

```bash
npm install react-router-dom
```

### Install Axios

```bash
npm install axios
```

**Note:**

* API Docs: [https://developer.themoviedb.org](https://developer.themoviedb.org)
