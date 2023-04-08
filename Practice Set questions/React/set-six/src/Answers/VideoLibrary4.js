import React, { useEffect, useState } from 'react'

const VideoLibrary4 = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (url === 'https://example.com/api/videos') {
              resolve({
                status: 200,
                message: 'Success',
                data: {
                  videos: [
                    {
                      title: 'The Power of Habit',
                      thumbnail: 'https://picsum.photos/200/130',
                      views: 1000000,
                      likes: 50000,
                    },
                    {
                      title: 'How to Code in JavaScript',
                      thumbnail: 'https://picsum.photos/200/135',
                      views: 500000,
                      likes: 25000,
                    },
                    {
                      title: '10 Minute Yoga for Beginners',
                      thumbnail: 'https://picsum.photos/200/131',
                      views: 250000,
                      likes: 15000,
                    },
                    {
                      title: 'Introduction to Machine Learning',
                      thumbnail: 'https://picsum.photos/200/132',
                      views: 100000,
                      likes: 10000,
                    },
                    {
                      title: 'The Science of Cooking',
                      thumbnail: 'https://picsum.photos/200/133',
                      views: 75000,
                      likes: 5000,
                    },
                    {
                      title: 'The Art of Public Speaking',
                      thumbnail: 'https://picsum.photos/200/134',
                      views: 50000,
                      likes: 2500,
                    },
                  ],
                },
              })
            } else {
              reject({
                status: 404,
                message: 'Videos not found.',
              })
            }
          }, 2000)
        })
      }

      const [data, setdata] = useState([])
    

      const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/videos")
        if (response.status === 200) {
            setdata(response.data.videos)
        }
    }

    useEffect(() => {
        fetchFunc()
    }, [])

    const handleClick = ()=>{
        setdata(data.filter((index, i) => i !== 0))
    }
  return (
    <div>
        <button onClick={handleClick}>Delete Video</button>
        {data.map((item) =>{
            return (
                <>
                <img src={item.thumbnail} alt="" srcset="" />
                <h4>{item.title}</h4>
                <p><strong>Likes : </strong>{item.likes}</p>
                <p><strong>Views :</strong>{item.views}</p>
                </>
            )
        })}
    </div>
  )
}

export default VideoLibrary4