import React from 'react';

import './App.css';
import {Navigation} from "./layout/Navigation/Navigation";
import {Header} from "./layout/Header/Header";
import {FormTodo} from "./layout/FormTodo/FormTodo";
import {ListTodo} from "./layout/ListTodo/ListTodo";
import {Route, Routes} from "react-router-dom";




export const App=()=> {

    return (
        <>
            <Header/>
            <Navigation/>
            <Routes>
                <Route path="/" element={<FormTodo/>}/>
            </Routes>

            <ListTodo/>
        </>

  );
}


