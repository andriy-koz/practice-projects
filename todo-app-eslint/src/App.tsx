import React, { FormEvent, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState('');

  function handleRemoveTodo(index: number) {
    setTodos(todos => todos.filter((todo, _index) => _index !== index));
  }

  function handleAddTodo(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (!text || todos.includes(text)) return;
    setTodos(todos => [...todos, text]);
    setText('');
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          name='text'
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button>Add todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
