import React, { useState } from "react";
import './TodoForm.scss'

interface TodoFormProps{
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
    
    const [title, setTitle] = useState<string>()

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.target.value)
    }
    const kewPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            props.onAdd(title!)
            setTitle('')
        }
    }
    const SubmitButton = () => {
        props.onAdd(title!)
        setTitle('')
    }

    return(
        <div className="TodoForm">
            <label htmlFor="title" className="TodoForm__label">Enter the case</label>
            <input 
                onChange={changeHandler}
                onKeyPress={kewPressHandler}
                value={title}
                type="text"
                id="title"
            />
            <button className="btn" onClick={SubmitButton}>Submit</button>
            
        </div>
    )
}