# React Learning Notes - Interview + Revision

## 1. What is React?

- React is a **JavaScript library** for building user interfaces (UI).
- Developed by **Meta (Facebook)**.
- Uses **Component-Based Architecture**.
- Uses **Virtual DOM** for fast rendering.
- Declarative: Describe the UI, React updates the DOM automatically.
- Reusable components reduce code duplication.

## 2. Features of React

- Component-Based
- Virtual DOM
- JSX
- One-way Data Binding
- Fast Rendering
- Reusable Components
- Hooks
- Rich Ecosystem
- Cross-platform (React Native)

## 3. JSX (JavaScript XML)

- HTML-like syntax inside JavaScript.
- Makes UI easier to write.
- Must return one parent element.
- Use `{}` to write JavaScript expressions.
- Supports conditions, loops (`map()`), function calls, and variables.

**Example**

```jsx
const name = "Jenish";

return <h1>Hello {name}</h1>;
```

## 4. Components

### Functional Component

- JavaScript function.
- Uses Hooks.
- Preferred in modern React.

```jsx
function Home() {
  return <h1>Home</h1>;
}
```

### Class Component

- Uses ES6 class.
- Extends `React.Component`.
- Uses lifecycle methods.
- Mostly used in legacy projects.

## 5. Props

- Props = Read-only data passed from Parent → Child.
- Cannot modify props inside child.
- Used for communication between components.

## 6. State

- Local data managed by the component.
- Updating state causes a re-render.
- `useState()` is used in functional components.

```jsx
const [count, setCount] = useState(0);
```

## 7. Hooks

### Definition

Hooks are built-in React functions introduced in **React 16.8** that allow functional components to use state, lifecycle methods, context, refs, and other React features without using class components.

### Common Hooks

- useState()
- useEffect()
- useContext()
- useReducer()
- useRef()
- useMemo()
- useCallback()
- useLayoutEffect()
- useId()
- useTransition()
- useDeferredValue()

## 8. Lifecycle Methods

### Lifecycle Phases

1. Mounting
2. Updating
3. Unmounting

### Class Lifecycle

#### constructor()

- Initialize state.
- Bind event handlers.

#### render()

- Returns JSX.

#### componentDidMount()

- Runs once after the component loads.
- API calls.
- Timers.
- Event listeners.

#### componentDidUpdate()

- Runs after updates.
- Compare previous props/state.

#### componentWillUnmount()

- Cleanup.
- Remove event listeners.
- Clear timers.

### Hooks Equivalent

**Mount**

```jsx
useEffect(() => {}, []);
```

**Update**

```jsx
useEffect(() => {}, [count]);
```

**Unmount**

```jsx
useEffect(() => {
  return () => {};
}, []);
```

## 9. useEffect()

Used for side effects.

### Examples

- API Calls
- Timers
- Event Listeners
- Local Storage

### Dependency Array

Runs after every render.

```jsx
useEffect(() => {});
```

Runs once.

```jsx
useEffect(() => {}, []);
```

Runs when `count` changes.

```jsx
useEffect(() => {}, [count]);
```

### Cleanup

```jsx
useEffect(() => {
  return () => {};
}, []);
```

## 10. Event Handling

### Common Events

- onClick
- onChange
- onSubmit
- onMouseEnter
- onKeyDown

**Example**

```jsx
<button onClick={handleClick}>Click</button>
```

## 11. Conditional Rendering

### Using if

```jsx
if (isLogin) {
  return <Home />;
}
```

### Using &&

```jsx
{
  isLogin && <Home />;
}
```

### Using Ternary

```jsx
{
  isLogin ? <Home /> : <Login />;
}
```

## 12. Lists & Keys

Render using `map()`.

```jsx
users.map((user) => <div key={user.id}>{user.name}</div>);
```

### Key should be

- Unique
- Stable
- Avoid array index

## 13. Forms

### Controlled Component

```jsx
<input value={name} onChange={(e) => setName(e.target.value)} />
```

### Uncontrolled Component

- Uses Ref.

## 14. Lifting State Up

Move shared state to the nearest common parent.

### Purpose

- Share data between sibling components.

## 15. Context API

Avoids Prop Drilling.

### Steps

- createContext()
- Provider
- useContext()

## 16. Props Drilling

Passing props through multiple components unnecessarily.

### Solution

- Context API
- Redux
- Zustand

## 17. Routing

React Router Components

- BrowserRouter
- Routes
- Route
- Link
- NavLink
- useNavigate
- useParams

## 18. Data Fetching

Usually done using:

```jsx
useEffect();
```

### Methods

- fetch()
- Axios

### Maintain

- Loading
- Data
- Error

## 19. Performance Optimization

- React.memo()
- useMemo()
- useCallback()
- Lazy Loading
- Suspense

### Purpose

Avoid unnecessary re-rendering.

## 20. useRef()

Used for:

- DOM Access
- Focus input
- Store mutable values

Updating a ref does **not** re-render the component.

## 21. Error Boundaries

Only available in Class Components.

### Methods

- componentDidCatch()
- getDerivedStateFromError()

### Purpose

Prevent application crashes.

## 22. Styling

Options

- CSS
- CSS Modules
- Bootstrap
- Tailwind CSS
- Styled Components

## 23. Testing

Libraries

- Jest
- React Testing Library

### Test

- Components
- User interaction
- Rendering
- API behavior

## 24. Virtual DOM

Virtual DOM is a lightweight copy of the Real DOM.

### Steps

1. State changes.
2. New Virtual DOM is created.
3. Diffing compares the old and new Virtual DOM.
4. Reconciliation updates only the changed parts in the Real DOM.

### Benefits

- Faster rendering
- Better performance

## 25. One-Way Data Binding

Data flows only from Parent → Child.

### Benefits

- Predictable
- Easy debugging
- Better state management

## 26. Controlled vs Uncontrolled Components

### Controlled

- State controls the input.
- Easy validation.
- Recommended.

### Uncontrolled

- Ref controls the input.
- Less code.
- Used occasionally.

## 27. React Folder Structure

```text
src/
├── assets/
├── components/
├── pages/
├── hooks/
├── context/
├── services/
├── App.jsx
└── main.jsx
```

## 28. React Best Practices

- Keep components small.
- Use functional components.
- Use Hooks.
- Don't mutate state directly.
- Use meaningful component names.
- Use unique keys.
- Keep state minimal.
- Reuse components.
- Write a clean folder structure.
- Avoid unnecessary re-renders.

# Interview Definitions (One-line)

**React**  
JavaScript library for building user interfaces.

**JSX**  
HTML-like syntax used inside JavaScript.

**Component**  
Reusable piece of UI.

**Props**  
Read-only data passed from parent to child.

**State**  
Component's local data that triggers re-rendering.

**Hooks**  
Built-in React functions that allow functional components to use state, lifecycle methods, and other React features.

**Virtual DOM**  
A lightweight copy of the Real DOM used to efficiently update only changed elements.

**useEffect**  
Hook used to perform side effects such as API calls, timers, and event listeners.

**Context API**  
Provides data across components without prop drilling.

**React.memo**  
Prevents unnecessary component re-rendering.

**useMemo**  
Memoizes expensive calculations.

**useCallback**  
Memoizes functions.

**useRef**  
Stores mutable values or accesses DOM elements without causing re-renders.