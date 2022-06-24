import React from 'react'
import {useState} from "react";
import {TodoEntity} from "types";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {OneTaskDelete} from "../OneTaskDelete/OneTaskDelete";
import {apiUrl} from "../../config/api";

export const ShowOneTaskDelete = () =>{
    const [deleteTasks, setDeleteTasks] = useState<TodoEntity | null>()


    const {id} = useParams()

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/${id}`)
            const data = await res.json()
            setDeleteTasks(data)
        })();
    }, []);



    return(
        <OneTaskDelete deleteId={deleteTasks?.id} taskTodo={deleteTasks?.taskTodo}/>
    )

}

