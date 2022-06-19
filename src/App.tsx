import React from 'react';

import './App.css';
import {Navigation} from "./layout/Navigation/Navigation";
import {Header} from "./layout/Header/Header";
import {FormTodo} from "./layout/FormTodo/FormTodo";
import {ShowListTodo} from "./layout/ShowListTodo/ShowListTodo";
import {Route, Routes} from "react-router-dom";
import {ErrorPage} from "./ErrorPage/ErrorPage";
import {ShowOneTaskEdit} from "./ShowOneTaskEdit/ShowOneTaskEdit";



export const App=()=> {
    return (
        <>
            <Header/>
            <Navigation/>
            <Routes>
                <Route path="/add"  element={<FormTodo/>}/>
                <Route path="/" element={<ShowListTodo/>}/>
                <Route path="/*" element={<ErrorPage/>}/>
                <Route path="/:id" element={<ShowOneTaskEdit/>}/>
            </Routes>
        </>

  );
}


