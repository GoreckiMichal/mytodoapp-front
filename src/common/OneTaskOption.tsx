import React, {useState} from 'react'
import {Link} from "react-router-dom";

import './OneTaskOption.css'
import {TodoEntity} from "types";



interface Props {
    delete: string;
    edit: string;
    taskTodo: string;
    deadline?: string;

}

export const OneTaskOption = (props: Props) => {
    const [done, setDone] = useState(false)


    const handleChange = () => {
        if (done === false) {
            setDone(true)
        } else if (done === true) {
            setDone(false)
        }
    }
    const deleteTask = async (e: any) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:3001/${props.delete}`, {
            method: 'DELETE',
        });
    }



    return (
        <div className="OneTaskOption">
            <div className="OneTaskOption__name-wrapper">
                <p className={done ? 'OneTaskOption__done' : 'OneTaskOption__not-done'}>{props.taskTodo}:</p>
                <p className="OneTaskOption__date">{props.deadline}</p>
            </div>
            <div className="OneTaskOption__button-wrapper">
                <Link className="OneTaskOption__button OneTaskOption__delete" to={props.delete}>
                    <button onClick={deleteTask}>X</button>
                </Link>
                <Link className="OneTaskOption__button OneTaskOption__edit" to={props.edit}>
                    <button>Edit</button>
                </Link>
                <button className="OneTaskOption__button"
                        onClick={handleChange}>  {done ? "Anuluj" : "Zrobione"} </button>
            </div>

        </div>
    )
}


