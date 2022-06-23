import React from 'react';

import './App.css';
import {Navigation} from "./layout/Navigation/Navigation";
import {Header} from "./layout/Header/Header";
import {FormTodo} from "./layout/FormTodo/FormTodo";
import {ShowListTodo} from "./layout/ShowListTodo/ShowListTodo";
import {Route, Routes} from "react-router-dom";
import {ErrorPage} from "./ErrorPage/ErrorPage";
import {ShowOneTaskEdit} from "./layout/ShowOneTaskEdit/ShowOneTaskEdit";
import {ShowOneTaskDelete} from "./layout/ShowOneTaskDelete/ShowOneTaskDelete";
import {NextYear} from "./layout/NextYear/NextYear";
import {AboutMe} from "./layout/AboutMe/AboutMe";



export const App=()=> {
    return (
        <>
            <Header/>
            <Navigation/>
            <Routes>
                <Route path="/add"  element={<FormTodo/>}/>
                <Route path="/" element={<ShowListTodo/>}/>
                <Route path="/*" element={<ErrorPage/>}/>
                <Route path="/edit/:id" element={<ShowOneTaskEdit/>}/>
                <Route path="/delete/:id" element={<ShowOneTaskDelete/>}/>
                <Route path="/next-year" element={<NextYear/>}/>
                <Route path="/about-me" element={<AboutMe/>}/>
            </Routes>
        </>

  );
}


