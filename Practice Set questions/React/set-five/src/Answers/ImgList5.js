import React, { useEffect, useState } from 'react'

const ImgList5 = () => {
    const [data, setdata] = useState([]);
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)


const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/users') {
          resolve({
            status: 200,
            message: 'Success',
            data: [
              {
                name: 'Saroj',
                image:
                  'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
                likes: 500,
                comments: 10,
              },
              {
                name: 'Meeta',
                image:
                  'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
                likes: 200,
                comments: 1,
              },
              {
                name: 'Alia',
                image:
                  'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
                likes: 100,
                comments: 5,
              },
            ],
          })
        } else {
          reject({
            status: 404,
            message: 'users data not found.',
          })
        }
      }, 2000)
    })
  }
  
    const fetchFunc = async () => {
        try {
            setloading(true)
            const response = await fakeFetch("https://example.com/api/users");
            if (response.status === 200) {
              setdata(response.data);
            }
        } catch (error) {
            seterror(true)
        }finally{
            setloading(false)
        }
     
    };
    useEffect(() => {

      fetchFunc();
    }, []);
  return (
    <div>
        {loading && <h2>Loading...</h2>}
        {error ?  <h1>User data not found</h1> : data.map((item)=>{
            return (
                <>
                <img src={item.image} alt="" width={"300px"}/>
                <p>Name : {item.name}</p>
                <p>Like : {item.likes}</p>
                <p>Comment : {item.comments}</p>
                </>
            )
        })}
    </div>
  )
}

export default ImgList5