import React, { useEffect, useState } from 'react'

const Projects7 = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === 'https://example.com/api/projects') {
                    resolve({
                        status: 200,
                        message: 'Success',
                        data: {
                            projects: [
                                {
                                    id: 1,
                                    title: 'E-commerce Website',
                                    description:
                                        'A fully functional e-commerce website with shopping cart and checkout functionality.',
                                    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
                                    completed: false,
                                },
                                {
                                    id: 2,
                                    title: 'Weather App',
                                    description:
                                        'A web application that displays the current weather and forecast for a given location.',
                                    technologies: ['React', 'Node.js', 'OpenWeatherMap API'],
                                    completed: true,
                                },
                                {
                                    id: 3,
                                    title: 'Task Manager',
                                    description:
                                        'A web application that allows users to create, manage and track tasks.',
                                    technologies: ['Vue.js', 'Firebase'],
                                    completed: false,
                                },
                                {
                                    id: 4,
                                    title: 'Blog Website',
                                    description:
                                        'A blog website that allows users to create, read, update and delete blog posts.',
                                    technologies: ['React JS', 'MongoDB'],
                                    completed: true,
                                },
                                {
                                    id: 5,
                                    title: 'Mobile Game',
                                    description:
                                        'A mobile game developed for iOS and Android platforms.',
                                    technologies: ['Unity', 'C#'],
                                    completed: false,
                                },
                            ],
                        },
                    })
                } else {
                    reject({
                        status: 404,
                        message: 'Projects not found.',
                    })
                }
            }, 2000)
        })
    }

    const [data, setdata] = useState([])
    const [currObj, setcurrObj] = useState({})
    const [toggle, settoggle] = useState(false)

    const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/projects")
        if (response.status === 200) {
            setdata(response.data.projects)
        }
    }

    const handleClick = (obj) => {
        setcurrObj(obj)
        settoggle(!toggle)
    }

    useEffect(() => {
        fetchFunc()
    }, [])

    return (
        <div>
            <h1>Projects</h1>
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <p><strong>Name : </strong>{item.title}</p>
                        <p><strong>Description: </strong>{item.description}</p>

                        {toggle && (item.id === currObj.id) ? <button onClick={() => handleClick(item)}>Hide Details</button> : <button onClick={() => handleClick(item)}>Show Details</button>}

                        {toggle && (item.id === currObj.id) && (
                            <>
                                <h1>Project Details</h1>
                                <p><strong>Name : </strong>{currObj.title}</p>
                                <p><strong>Description: </strong>{currObj.description}</p>
                                <p><strong>Technologis : </strong>{currObj.technologies}</p>
                                <p><strong>Completed: </strong>{currObj.completed ? "Yes" : "No"}</p>
                            </>
                        )}
                        <hr />
                    </div>
                )
            })}
            {/* <h1>Project Details</h1>
            <p><strong>Name : </strong>{currObj.title}</p>
            <p><strong>Description: </strong>{currObj.description}</p>
            <p><strong>Technologis : </strong>{currObj.technologies}</p>
            <p><strong>Completed: </strong>{currObj.completed ? "yes": "No"}</p> */}
        </div>
    )
}

export default Projects7