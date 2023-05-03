import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import DoneTodo from './DoneTodo'
import OpenTodo from './OpenTodo'
import AllTodos from './AllTodos'
import EachTodo from './EachTodo'
import MergedTodo from './MergedTodo'

const TodoHome = () => {
    return (
        <div>
            <h1>Todos</h1>
            <Link to={"/"}>
               Home
            </Link>{" "}
            <Link to={"/doneTodo"}>
                Done Todo
            </Link>
            <Link to={"/openTodo"}>{" "}
                Open Todo
            </Link>
            <Routes>
                <Route path='/' element={<AllTodos />} />
                <Route path='/doneTodo' element={<MergedTodo filterVal = {true}/>} />
                <Route path='/openTodo' element={<MergedTodo filterVal = {false}/>} />
                <Route path='/todo/:todoId' element={<EachTodo />} />
            </Routes></div>
    )
}

export default TodoHome