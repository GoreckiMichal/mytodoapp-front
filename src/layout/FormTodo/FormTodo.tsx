import React, {SyntheticEvent, useState} from 'react'


import './FormTodo.css'


export const FormTodo = ()=>{
    const [inputVal, setInputVal]= useState('')

    const sendForm = (e:SyntheticEvent)=>{
        e.preventDefault()
    }

    return(
        <>
        <form className="FormTodo" onSubmit={sendForm}>
            <input type="text" value={inputVal} onChange={e=>setInputVal(e.target.value)} placeholder="Wpisz zadanie"/>
            <button>Dodaj zadanie</button>
        </form>
        </>
    )
}