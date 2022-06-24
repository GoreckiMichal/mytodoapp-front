import React, {useEffect, useState} from 'react'
import './ShowListTodo.css'
import {TodoEntity} from "types";
import {OneTaskOption} from "../OneTaskOption/OneTaskOption";
import {apiUrl} from "../../config/api";


export const ShowListTodo = () => {
    const [todos, setTodos] = useState<TodoEntity[]>([])
    // const [deleteTask, setDeleteTask] = useState<TodoEntity[]>([])


    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/`);
            const data = await res.json();
            setTodos(data)
        })();
    }, [setTodos]);



    const oneTaskWithOption = todos.map(todo=><OneTaskOption key={todo.id}  taskTodo={todo.taskTodo}  deadline={todo.deadline}   delete={`delete/${todo.id}`} edit={`edit/${todo.id}`} />)


    return (

        <div className="ListTodo">
            <h1 className="ListTodo__title">Wszystkie zadania</h1>
            {oneTaskWithOption}

        </div>
    )
}