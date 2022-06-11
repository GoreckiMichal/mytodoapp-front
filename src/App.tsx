import React from 'react';

import './App.css';
import {Navigation} from "./layout/Navigation/Navigation";
import {Header} from "./layout/Header/Header";
import {FormTodo} from "./layout/FormTodo/FormTodo";
import {ListTodo} from "./layout/ListTodo/ListTodo";



export const App=()=> {

    return (
        <>
            <Header/>
            <Navigation/>
            <FormTodo/>
            <ListTodo/>
        </>

  );
}


