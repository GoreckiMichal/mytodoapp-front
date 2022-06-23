import React, {useState} from 'react'
import {Link} from "react-router-dom";

import './OneTaskOption.css'




interface Props {
    delete: string;
    edit: string;
    taskTodo: string;
    deadline?: string;

}

export const OneTaskOption = (props: Props) => {
    const [done, setDone] = useState(false)



    const handleChange = () => {
        if (!done) {
            setDone(true)
        } else if (done) {
            setDone(false)
        }
    }


    return (
        <div className="OneTaskOption">
            <div className="OneTaskOption__name-wrapper">
                <p className={done ? 'OneTaskOption__done' : 'OneTaskOption__not-done'}>{props.taskTodo}:</p>
                <p className={done ? 'OneTaskOption__done OneTaskOption__date' : 'OneTaskOption__date OneTaskOption__not-done'}>{props.deadline}</p>
            </div>
            <div className="OneTaskOption__button-wrapper">
                <Link  to={props.delete}>
                    <button className="OneTaskOption__button">X</button>
                </Link>
                <Link  to={props.edit}>
                    <button className="OneTaskOption__button">Edit</button>
                </Link>
                <button className="OneTaskOption__button"
                        onClick={handleChange}>  {done ? "Anuluj" : "Zrobione"} </button>
            </div>

        </div>
    )
}


