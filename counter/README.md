# Counter App — Increase & Decrease Count (0 to 20)

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
