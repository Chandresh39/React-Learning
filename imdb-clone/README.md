# IMDB Clone — Tailwind CSS, React Router Setup & API

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

### API Example — Show Latest Movies

### Install Axios

```bash
npm install axios
```

### Home.jsx Example

```jsx

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

```

**Note:**

* API Docs: [https://developer.themoviedb.org](https://developer.themoviedb.org)
* GET Latest Movie's `https://api.themoviedb.org/3/movie/now_playing?api_key=de129c78859f307157260a20a0534c74&language=en-US&page=1`
* Use to show Movie Poster `https://image.tmdb.org/t/p/original/${poster_path}`
