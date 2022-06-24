import React, {useEffect, useState} from 'react'
import {TodoEntity} from "types";
import {apiUrl} from "../../config/api";

import './NextYear.css'
export const NextYear = () => {

    const [nextYearTasks, setNextYearTasks] = useState<TodoEntity[]>([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/next-year`);
            const data = await res.json();
            setNextYearTasks(data)
        })();
    }, [setNextYearTasks]);

    const nextYearTask = nextYearTasks.map(task => (<li key={task.id}>{task.taskTodo}</li>))

    return (
        <>
            <div className="NextYear">
                <h2 className="NextYear__title">Wszystkie zadania do zrealizowania w przyszłym roku:</h2>

            <div className="NextYear__list">
                {nextYearTask}
            </div>
            </div>
        </>
    )
}