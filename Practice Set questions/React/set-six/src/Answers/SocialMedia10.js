import React, { useEffect, useState } from 'react'

const SocialMedia10 = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === 'https://example.com/api/profile') {
                    resolve({
                        status: 200,
                        message: 'Success',
                        data: {
                            profile: {
                                name: 'John',
                                age: 30,
                                gender: 'male',
                                email: 'john@example.com',
                                occupation: 'Software Engineer',
                                followers: 450,
                                followedBy: 400,
                            },
                        },
                    })
                } else {
                    reject({
                        status: 404,
                        message: 'Profile not found.',
                    })
                }
            }, 2000)
        })
    }

    const [data, setdata] = useState({});
    const [disable, setdisable] = useState(false)

    const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/profile");
        if (response.status === 200) {
            setdata(response.data.profile);
        }
    };

    useEffect(() => {
        fetchFunc();
    }, []);

    const handleClick = () => {
        setdata({ ...data, followers: ++data.followers })
        setdisable(true)
    }
    return (
        
            Object.keys(data).length !== 0 && (
                <div>
                    <h1>{data.name}</h1>
                    <p>
                        <strong>age : </strong>
                        {data.age}
                    </p>
                    <p>
                        <strong>gender : </strong>
                        {data.gender}
                    </p>
                    <p>
                        <strong>occupation : </strong>
                        {data.occupation}
                    </p>
                    <p>
                        <strong>followers : </strong>
                        {data.followers}  followers
                    </p>
                    <p>
                        <strong>followed By : </strong>
                        {data.followedBy} followers
                    </p>
                    <button onClick={handleClick} disabled={disable}>Follow {data.name}</button>

                </div>
            )
        
    )
}

export default SocialMedia10