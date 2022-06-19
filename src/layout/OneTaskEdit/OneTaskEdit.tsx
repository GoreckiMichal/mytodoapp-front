import React, {SyntheticEvent, useState} from 'react';
import {TodoEntity} from "types";
import {useParams} from "react-router-dom";

import './OneTaskEdit.css'

interface Props {
    id: any;
    taskTodo: any;
    deadline: any;
    oneTask?: TodoEntity
}

export const OneTaskEdit = (props: Props) => {
    const [inputVal, setInputVal] = useState({
        taskTodo: '',
        deadline: ''
    })

    const {id} = useParams()

    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault()
            const todoRes = await fetch(`http://localhost:3001/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...inputVal
                }),
            });
            const data = await todoRes.json()
            console.log(data)
            setInputVal({
                taskTodo: '',
                deadline: ''
            })
    }

    const updateForm = (key: string, value: any) => {
        setInputVal(form => ({
            ...form,
            [key]: value,
        }))
    }

    return (
        <>
            <div className="FormEdit__info">
                <p className="FormEdit__info--title">Edytowane zadanie:</p> <p className="FormEdit__info--detail">{props.taskTodo}</p> <p className="FormEdit__info--title">z datą</p> <p className="FormEdit__info--detail">{props.deadline}</p>
            </div>
            <form className="FormEdit" onSubmit={sendForm}>
                <input
                    type="text"
                    name="taskTodo"
                    value={inputVal.taskTodo}
                    onChange={e => updateForm('taskTodo', e.target.value)}
                />
                <input
                    type="date"
                    name="deadline"
                    value={inputVal.deadline}
                    onChange={e => updateForm('deadline', e.target.value)}
                />
                <button className="FormEdit__button">Zaktualizuj zadanie</button>
            </form>
        </>
    )
}