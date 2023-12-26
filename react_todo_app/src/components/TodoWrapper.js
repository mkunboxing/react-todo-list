import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditTodo';
uuidv4();

// get todos for local storage

const getTodosItems = () => {
    let todos = localStorage.getItem("todos")
    // console.log(todos);
    if (todos) {
        return JSON.parse(localStorage.getItem("todos"))
    }else{
        return [];
    }
    
}


export default function TodoWrapper() {
    const [todos, settodos] = useState(getTodosItems());

    const addTodo = (todo) => {
        settodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }

    // add todos to local storage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const complete = (id) => {
        settodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = (id) => {
        settodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = (id) => {
        settodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }
    const editTask = (task, id) => {
        settodos(todos.map(todo => todo.id === id ? { ...todo, task: task, isEditing: !todo.isEditing } : todo))
    }
    return (
        <div className='TodoWrapper'>
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? <EditTodoForm EditTodo={editTask} task={todo} /> : (
                    <Todo task={todo} key={index}
                        complete={complete} deleteTodo={deleteTodo}
                        editTodo={editTodo} />)

            ))}

        </div>
    )
}
