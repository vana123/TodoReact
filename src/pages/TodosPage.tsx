import React, {useState, useEffect} from "react";
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from "../interfaces";

import './TodosPage.scss'

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(()=>{
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        console.log(saved)
        return () => {
            setTodos([...saved])
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo = {
          id: Date.now(),
          title: title,
          completed: false
        }
        // setTodos([newTodo, ...todos])
        if(title !== '') setTodos(prev => [newTodo, ...todos]) 
        console.log(`add new to do ${title}`)
    }

    const onToggle = (id:number) => {
        setTodos(prev => prev.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        }))
    }
    
    const onRemove = (id: number) =>{
      const shoudRemove = window.confirm('впевнені??? :)')
      if(shoudRemove){
        setTodos(prev => prev.filter(todo => todo.id !== id))
      } 
    }

    const onClear = () => {
      setTodos([]);
    }

    return <>   
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} RemoveHandler={onRemove} ToggleHandler={onToggle} ClearHandler={onClear} />
    </>
}