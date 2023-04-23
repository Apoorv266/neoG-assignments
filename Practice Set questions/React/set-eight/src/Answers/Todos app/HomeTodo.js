import React from 'react'
import TodoList from './TodoList'
import TodoContext, { TodoContextFunc } from './TodoContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoNav from './TodoNav'
import DoneTodo from './DoneTodo'
export { TodoContext }
const HomeTodo = () => {
    return (
        <div>
            <BrowserRouter>
                <TodoContextFunc>
                    <TodoNav />
                    <Routes>
                        <Route path='/' element={<TodoList />}>
                            <Route path='/doneTodo' element={<DoneTodo/>}/>
                        </Route>
                    </Routes>
                </TodoContextFunc>
            </BrowserRouter>
        </div>
    )
}

export default HomeTodo