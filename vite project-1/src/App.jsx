import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [val, setVal] = useState("");

  const addTodo = () => {
    if (val.trim()) {
      setTodos([...todos, val]);
      setVal('');
    }
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div>
        <input 
          type="text" 
          value={val} 
          onChange={(e) => setVal(e.target.value)} 
          placeholder="Enter a todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
