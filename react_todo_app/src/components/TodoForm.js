import React, { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the value is not empty before adding the todo
    if (value.trim() !== '') {
      addTodo(value);
      setValue('');
    } else {
      // Handle empty input case (e.g., show an error message)
      // For now, just log an error message to the console
      console.error('Input cannot be empty!');
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today"
        required
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
