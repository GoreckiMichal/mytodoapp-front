import React, {SyntheticEvent, useState} from 'react'


import './FormTodo.css'



export const FormTodo = ()=>{
    const [inputVal, setInputVal]= useState({
        id: '',
        taskTodo: '',
        deadline: ''
    })

    const sendForm = async (e:SyntheticEvent)=>{
        e.preventDefault()

        const todoRes = await fetch('http://localhost:3001/add/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...inputVal
            }),
        });
        const data = await todoRes.json()
        console.log(data)

    }

    const updateForm =(key:string, value: any)=>{
        setInputVal(form => ({
            ...form,
            [key]: value,
        }))
    }


    return(
        <>
        <form className="FormTodo" onSubmit={sendForm}>
            <input
                type="text"
                name="TaskTodo"
                value={inputVal.taskTodo}
                onChange={e=>updateForm('taskTodo',e.target.value)}
                placeholder="Wpisz zadanie"
            /><br/>
            <label htmlFor="deadline">Termin wykonania zadania</label>
            <input
                type="date"
                name="deadline"
                value={inputVal.deadline}
                onChange={e=>updateForm('deadline',e.target.value)}
            />
            <button className="FormTodo__button">Dodaj zadanie</button>
        </form>
        </>
    )
}