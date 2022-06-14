import React, {useEffect, useState} from 'react'

import './ListTodo.css'
import {TodoEntity} from "types";
import {OneTaskOption} from "../../common/OneTaskOption";

export const ListTodo = () => {
    const[todos, setTodos]= useState<TodoEntity[]>([])

    useEffect(()=>{
        (async()=>{
            const res = await fetch(`http://localhost:3001/s`);
            const data = await res.json();
            setTodos(data)
            console.log(data)
        })();
    }, []);




    const oneTask = todos.map(todo=><OneTaskOption key={todo.id}  taskTodo={todo.taskTodo} deadline={todo.deadline}   delete={'ddd'} edit={'eee'} done={'sss'}/>)


    return (

        <div className="ListTodo">
            {oneTask}
        </div>
    )
}