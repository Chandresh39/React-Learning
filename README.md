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

### Functions with Conditional Statements

```jsx
const decrement = () => {
  if (count <= 0) return;
  setCount(count - 1);
};

const increment = () => {
  if (count >= 20) return;
  setCount(count + 1);
};
```

### Buttons with `onClick` Event

```jsx
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
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

## 4. To-Do List — Add & Delete Tasks

**Folder Structure:**

```
src
 ├── assets
 ├── components
 │    ├── AddTasks.jsx
 │    ├── DisplayTask.jsx
 │    └── InputTask.jsx
 ├── App.css
 ├── App.jsx
 ├── index.css
 └── main.jsx
```

---

## 5. IMDB Clone — Tailwind CSS & React Router Setup

### Install Tailwind CSS

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

### Configure `tailwind.config.js`

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

### Add Tailwind Directives to `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### Install React Router DOM

📄 [React Router Documentation](https://reactrouter.com/6.30.1/start/tutorial)

```bash
npm install react-router-dom
```

---

## 6. API Example — Show Latest Movies

### Install Axios

```bash
npm install axios
```

### App.jsx Example

```jsx
import React, { useEffect, useState } from 'react'
import Banner from '../home/Banner'
import MovieList from '../home/MovieList'
import axios from 'axios'

function Home() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=de129c78859f307157260a20a0534c74&language=en-US&page=1`).then(function(res){
      console.log(res.data.results)
      setMovies(res.data.results)
    })
  }, [])
  return (
    <>
      <Banner />
      <div className='text-center text-3xl p-5'>Trending Movie's</div>
      <div className='flex flex-row flex-wrap justify-around'>
        {
          movies.map((movieObj) => {
            return <MovieList poster_path={movieObj.poster_path} original_title={movieObj.original_title} />

          })
        }
      </div>
    </>
  )
}

export default Home
```

**Note:**

* API Docs: [https://developer.themoviedb.org](https://developer.themoviedb.org)
* GET Latest Movie's `https://api.themoviedb.org/3/movie/now_playing?api_key=de129c78859f307157260a20a0534c74&language=en-US&page=1`
* Use to show Movie Poster `https://image.tmdb.org/t/p/original/${poster_path}`
