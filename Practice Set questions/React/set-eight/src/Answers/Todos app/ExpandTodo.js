import React, { useContext } from 'react'
import TodoContext from './TodoContext'
import { Link, useParams } from 'react-router-dom';

const ExpandTodo = () => {
    const { todoData } = useContext(TodoContext)
    const { todoId } = useParams();
    let itemObj = todoData.find(item => item.id === Number(todoId))
    return (
        <div>
            {itemObj ? (
                <div><h1>Todo description :</h1>
                    <p><strong>Title : </strong>{itemObj?.title}</p>
                    <p><strong>Description : </strong>{itemObj?.description}</p>
                    <p><strong>Status :</strong> {itemObj.isCompleted ? "Not Done" : " Done"}</p>
                    <Link to="/"> Back to home </Link></div>) : <h1>Loading Data...</h1>}
            <hr />
        </div>
    )
}

export default ExpandTodo