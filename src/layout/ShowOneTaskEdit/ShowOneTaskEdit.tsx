import React, {useEffect, useState} from 'react'
import {TodoEntity} from "types";
import {OneTaskEdit} from "../OneTaskEdit/OneTaskEdit";

import {useParams} from "react-router-dom";



export const ShowOneTaskEdit = () => {

    const [editTasks, setEditTasks] = useState<TodoEntity | null>(null)

    const {id} = useParams()

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/${id}`)
            const data = await res.json()
            setEditTasks(data)
        })();
    }, []);


    return (
        <>
            <OneTaskEdit id={editTasks?.id} taskTodo={editTasks?.taskTodo} deadline={editTasks?.deadline}/>

        </>
    )
}