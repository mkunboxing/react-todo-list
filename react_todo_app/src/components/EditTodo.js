import React, { useState } from 'react'

export default function EditTodoForm({EditTodo ,task}) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        EditTodo(value,task.id);

        setValue("");
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className="todo-input"value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className="todo-btn">Update Task</button>
    </form>
  )
}
