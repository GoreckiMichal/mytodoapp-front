import React, {useEffect, useState} from 'react'

import './ShowListTodo.css'
import {TodoEntity} from "types";
import {OneTaskOption} from "../../common/OneTaskOption";


export const ShowListTodo = () => {
    const [todos, setTodos] = useState<TodoEntity[]>([])
    // const [deleteTask, setDeleteTask] = useState<TodoEntity[]>([])


    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/`);
            const data = await res.json();
            setTodos(data)
        })();
    }, [setTodos]);



    const oneTaskWithOption = todos.map(todo=><OneTaskOption key={todo.id}  taskTodo={todo.taskTodo}  deadline={todo.deadline}   delete={`${todo.id}/`} edit={`${todo.id}`} />)


    return (

        <div className="ListTodo">
            Wszystkie zadania
            {oneTaskWithOption}

        </div>
    )
}