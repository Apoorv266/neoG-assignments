import React, { useEffect, useState } from 'react'

const Todos2 = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === 'https://example.com/api/todos') {
                    resolve({
                        status: 200,
                        message: 'Success',
                        data: {
                            todos: [
                                {
                                    title: 'Go Outside',
                                    desc: 'lorem ipsum dolor sit amit',
                                    todos: ['shopping', 'cricket', 'walking'],
                                },
                                {
                                    title: "Let's Work",
                                    desc: 'lorem ipsum dolor sit amit',
                                    todos: ['Feature update', 'Team Meet', 'Code Walkthrough'],
                                },
                                {
                                    title: 'Home Work',
                                    desc: 'lorem ipsum dolor sit amit',
                                    todos: ['Fix tap', 'Wedding function'],
                                },
                            ],
                        },
                    })
                } else {
                    reject({
                        status: 404,
                        message: 'Todo list not found.',
                    })
                }
            }, 2000)
        })
    }

    const [data, setdata] = useState([])

    const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/todos")
        if (response.status === 200) {
            setdata(response.data.todos)
        }
    }

    useEffect(() => {
        fetchFunc()
    }, [])


    return (
        <div>
            {data.map((item) =>{
                return (
                    <>
                    <h1>{item.title} : {item.desc}</h1>
                    <ol>
                    {item.todos.map((item) => <li>{item}</li>)}
                    </ol>
                    <hr />
                    </>
                )
            })}
        </div>
    )
}

export default Todos2