import React, { useEffect, useState } from 'react'

const UserProfile = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === 'https://example.com/api/profile') {
                    resolve({
                        status: 200,
                        message: 'Success',
                        data: {
                            profiles: {
                                name: 'John',
                                age: 30,
                                gender: 'male',
                                email: 'john@example.com',
                                occupation: 'Software Engineer',
                            },
                        },
                    })
                } else {
                    reject({
                        status: 404,
                        message: 'User Profile not found.',
                    })
                }
            }, 2000)
        })
    }

    const [data, setdata] = useState({})
    const [loader, setloader] = useState(false)
    const [errorMsg, seterrorMsg] = useState({})

    const fetchFunc = async () => {
        try {
            setloader(true)
            const response = await fakeFetch("https://example.com/api/profile")
            if (response.status === 200) {
                setdata(response.data.profiles)
            }
            setloader(false)
        }
        catch (e) {
            seterrorMsg(e)
            setloader(false)
        }

    }

    useEffect(() => {
        fetchFunc()
    }, [])
console.log(data)
    return (
        <div>
            <h1>User Profile</h1>
            {loader && "Loading..." }

            {Object.keys(data).length !== 0  && (<div>
                <p>Name: {data.name}</p>
                <p>Age: {data.age}</p>
                <p>Gender:{data.gender}</p>
            </div>)}


            {Object.keys(data) !== 0 && (
                <div>
                    <h1>{errorMsg.message}</h1>
                </div>
            )}
        </div>
    )
}

export default UserProfile