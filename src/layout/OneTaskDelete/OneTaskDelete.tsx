import React, {useState} from 'react'
import {Link, } from "react-router-dom";

import './OneTaskDelete.css'

interface Props {
    deleteId: string | undefined;
    taskTodo: string | undefined;
}

export const OneTaskDelete = (props: Props) => {
    const [statusDelete, setStatusDelete] = useState(false)


    const deleteTask = async (e: any) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:3001/${props.deleteId}`, {
            method: 'DELETE',
        });
        if (!statusDelete) {
            setStatusDelete(true)
        } else if (statusDelete) {
            setStatusDelete(false)
        }
    }

    if(statusDelete){
        return(
            <>
                <div className="OneTaskDelete__confirm">
                    <p className="OneTaskDelete__confirm-info">Usunięto zadanie o nazwie: </p> <p className="OneTaskDelete__confirm-info--detail">{props.taskTodo}</p>
                    <br/>
                </div>
                <div className="OneTaskDelete__confirm">
                    <Link className="OneTaskDelete__confirm-info-link" to="/"><button className="OneTaskDelete__button">Powrót do strony głównej</button></Link>
                </div>
            </>
        )
    }


    return(
        <div className="OneTaskDelete">
            <h2 className="OneTaskDelete__title"> Czy skasować zadanie:</h2><h2 className="OneTaskDelete__title">{props.taskTodo}</h2>
            <div className="OneTaskDelete__title">
            <button onClick={deleteTask} className="OneTaskDelete__button">Potwierdź</button>
            </div>
        </div>
    )

}