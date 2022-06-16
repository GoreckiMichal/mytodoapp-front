import React, {useEffect, useState} from 'react'

import './ListTodo.css'
import {TodoEntity} from "types";
import {OneTaskOption} from "../../common/OneTaskOption";


export const ListTodo = () => {
    const [todos, setTodos] = useState<TodoEntity[]>([])
    // const [deleteTask, setDeleteTask] = useState<TodoEntity[]>([])


    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/`);
            const data = await res.json();
            setTodos(data)
            console.log(data)
        })();
    }, [setTodos]);



    const oneTask = todos.map(todo=><OneTaskOption key={todo.id}  taskTodo={todo.taskTodo}  deadline={todo.deadline}   delete={`${todo.id}/`} edit={'eee'} done={'sss'} />)

    console.log('onetask list todo', oneTask)

    return (

        <div className="ListTodo">
            {oneTask}
        </div>
    )
}