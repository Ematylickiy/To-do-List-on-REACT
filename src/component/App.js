import React, { useState } from 'react'
import TodoInput from './TodoInput';
import Todo from './Todo';
import './component.css'


function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newTask = {
        id: Math.random() * 1000,
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newTask]);
    }
  };
  
  const deleteTask = id => {
    setTodos(todos.filter(item => item.id !== id))
  };

  const handleToggle = id => {
    setTodos(todos.map(item => item.id === id ? { ...item, complete: !item.complete } : item))
  };


  return (
    <div className = 'wrapper' >
      <header>
        <h1> To do list (React)</h1>
      </header>
      <TodoInput addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTask={deleteTask}
            handleToggle = {handleToggle}
          />
        )
      })}
    </div>
  );
}


export default App;
