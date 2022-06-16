import React, {useState} from 'react'
import {Link} from "react-router-dom";

import './OneTaskOption.css'


interface Props {
    delete: string;
    edit: string;
    done: string
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
        console.log('test')
    }





    const deleteTask =async(e:any)=>{
        e.preventDefault()
        const res = await fetch(`http://localhost:3001/${props.delete}`,{
            method: 'DELETE',
                  });

    }







    return (

        <div className="OneTaskOption">
            <div className="OneTaskOption__name-wrapper">
                <p className={done ? 'OneTaskOption__done' : 'OneTaskOption__not-done'}>{props.taskTodo} : </p>
                   {props.deadline}
            </div>
            <div className="OneTaskOption__button-wrapper">
                <Link className="OneTaskOption__button OneTaskOption__delete"  to={props.delete}><button onClick={deleteTask}>X</button> </Link>
                <Link className="OneTaskOption__button OneTaskOption__edit" to={props.edit}> EDIT </Link>
                <button className="OneTaskOption__button"
                        onClick={handleChange}>  {done ? "Anuluj" : "Zrobione"} </button>
            </div>

        </div>
    )
}


