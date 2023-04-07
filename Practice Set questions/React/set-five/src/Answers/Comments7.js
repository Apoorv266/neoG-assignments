import React, { useEffect, useState } from 'react'

const Comments7 = () => {
    const [data, setdata] = useState([])
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === 'https://example.com/api/comments') {
                    resolve({
                        status: 200,
                        message: 'Success',
                        data: {
                            comments: [
                                {
                                    name: 'Raju',
                                    text: 'Hello how are you long time no see!!!',
                                },
                                { name: 'Pankaj', text: 'Party when??' },
                                { name: 'Sakshi', text: 'Where are you currently staying' },
                                { name: 'Kishore', text: 'Hello Buddy!!' },
                            ],
                        },
                    })
                } else {
                    reject({
                        status: 404,
                        message: 'No comments Found',
                    })
                }
            }, 2000)
        })
    }

    const FetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/comments")
        if (response.status === 200) {
            setdata(response.data.comments)
        }
    }

    const handleDelete = (index) => {
        setdata(data.filter((item,  i) => i !== index))
      };
    useEffect(() => {
        FetchFunc()
    }, [])

    return (
        <div>
            {data.map(({name, text},  index) =>{
                return (
                    <>
                    <h1>{name}</h1>
                    <h4>{text}</h4>
                    <button onClick={()=> handleDelete(index)}>Delete</button>
                    </>
                )
            })}
        </div>
    )
}

export default Comments7