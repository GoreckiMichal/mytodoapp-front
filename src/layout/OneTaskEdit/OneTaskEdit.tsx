import React, {SyntheticEvent, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {apiUrl} from "../../config/api";

import './OneTaskEdit.css'

interface Props {
    id: string | undefined;
    taskTodo: string | undefined;
    deadline: string | undefined;
}

export const OneTaskEdit = (props: Props) => {
    const [inputVal, setInputVal] = useState({
        taskTodo: '',
        deadline: ''
    })
    const [statusEdit, setStatusEdit] = useState(false)

    const {id} = useParams()

    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault()
            const todoRes = await fetch(`${apiUrl}/${id}`, {
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
        if (!statusEdit) {
            setStatusEdit(true)
        } else if (statusEdit) {
            setStatusEdit(false)
        }
    }

    const updateForm = (key: string, value: any) => {
        setInputVal(form => ({
            ...form,
            [key]: value,
        }))
    }


    if(statusEdit){
        return(
            <>
                <div className="FormEdit__info">
                    <p className="FormEdit__info--title">Zmieniono nazwę zadania</p> <p className="FormEdit__info--detail">{props.taskTodo}</p>
                </div>
                    <div className="FormEdit__back">
                        <Link className="OneTaskDelete__confirm-info-link" to="/"><button className="OneTaskDelete__button">Powrót do strony głównej</button></Link>
                    </div>

            </>

        )
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
                    required
                    minLength={3}
                    maxLength={255}
                    value={inputVal.taskTodo}
                    placeholder="Wpisz nową nazwe zadania"
                    onChange={e => updateForm('taskTodo', e.target.value)}
                />
                <label className="FormEdit__label" htmlFor="taskTodo">Nowa data</label><br/>
                <input
                    type="date"
                    name="deadline"
                    required
                    value={inputVal.deadline}
                    onChange={e => updateForm('deadline', e.target.value)}
                />
                <button className="FormEdit__button">Zaktualizuj zadanie</button>
            </form>
        </>
    )


}