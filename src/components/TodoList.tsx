import React from "react";
import { ITodo } from '../interfaces';
import './TodoList.scss'

interface TodoListProps{
    todos: ITodo[];
    RemoveHandler(id:number) : void
    ToggleHandler(id:number): void
    ClearHandler(): void
}

export const TodoList: React.FC<TodoListProps> = (props) => {

    const {todos} = props;

    if(props.todos.length === 0){
        return(
            <div className="TodoList">
                <div className="TodoList__container">
                    <p>None</p>
                </div>
            </div>
        )
    }

    

    return (
        <div className="TodoList">
            <div className="TodoList__container">
            {todos.map(todo => {
                return(
                    <div className="TodoList__Todo" key={todo.id} onClick={props.ToggleHandler.bind(null, todo.id)}>   
                        <div className="TodoList__Todo__checkbox">
                            <input className="checkbox" type="checkbox" checked={todo.completed}/>    
                        </div>     
                        <div className="TodoList__Todo__title">
                            {todo.title}
                        </div>
                        <div className="TodoList__Todo__remove" onClick={() => {props.RemoveHandler(todo.id)}}>
                            remove
                        </div>
                    </div>
                )
            })}
            <button className="TodoList__btn btn" onClick={()=>{props.ClearHandler()}}>clear</button>
            </div>
        </div>
    )
}