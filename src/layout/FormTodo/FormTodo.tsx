import React, {SyntheticEvent, useState} from 'react'


import './FormTodo.css'







export const FormTodo = () => {
    const [inputVal, setInputVal] = useState({
        id: '',
        taskTodo: '',
        deadline: ''
    })
    const [loading, setLoading] = useState(false)
    // const [addedTask, setAddedTask] = useState('')
    // const [deadline,setDeadline] = useState('')


    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const todoRes = await fetch('http://localhost:3001/add/', {
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
            setInputVal({
                id: '',
                taskTodo: '',
                deadline: ''
            })
            // setAddedTask(data.taskTodo)
            // setDeadline(data.deadline)
        } finally {
            setLoading(false)
        }
    }
    // if(loading){
    //     return (
    //         <h2 className="FormTodo__heading">Trwa dodwanie zadania</h2>
    //     )
    // }

    // if(addedTask && deadline){
    //     return(
    //         <>
    //             <p>Zadanie dodane {addedTask} {deadline}</p>
    //
    //             <Link to="/">Zaktualizuj listę zadań</Link>
    //
    //         </>
    //
    //     )
    // }


    const updateForm = (key: string, value: any) => {
        setInputVal(form => ({
            ...form,
            [key]: value,
        }))
    }

    return (
        <>
            <form className="FormTodo" onSubmit={sendForm}>
                <input
                    type="text"
                    name="TaskTodo"
                    value={inputVal.taskTodo}
                    onChange={e => updateForm('taskTodo', e.target.value)}
                    placeholder="Wpisz zadanie"
                /><br/>
                <label htmlFor="deadline">Termin wykonania zadania</label>
                <input
                    type="date"
                    name="deadline"
                    value={inputVal.deadline}
                    onChange={e => updateForm('deadline', e.target.value)}
                />
                <button className="FormTodo__button">Dodaj zadanie</button>
            </form>
        </>
    )
}