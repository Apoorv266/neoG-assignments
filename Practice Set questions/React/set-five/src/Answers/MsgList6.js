import React, { useEffect, useState } from 'react'

const MsgList6 = () => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (url === 'https://example.com/api/userchat') {
              resolve({
                status: 200,
                message: 'Success',
                data: [
                  {
                    name: 'Alia',
                    messages: [
                      {
                        from: 'Alia',
                        message: 'Good Morning',
                      },
                      {
                        from: 'Ranvir',
                        message: 'Good Morning, How are you?',
                      },
                    ],
                  },
                  {
                    name: 'Jeena',
                    messages: [
                      {
                        from: 'Jeena',
                        message: 'When is the meeting scheduled?',
                      },
                      {
                        from: 'Seema',
                        message: 'It is at 10AM tomorrow.',
                      },
                    ],
                  },
                  {
                    name: 'Abhay',
                    messages: [
                      {
                        from: 'Abhay',
                        message: 'Have you found a house yet?',
                      },
                      {
                        from: 'John',
                        message: 'No luck yet, still searching.',
                      },
                      {
                        from: 'Abhay',
                        message:
                          'Hey, an apartment just got vacant in my bulding. Do you wanna have a look?',
                      },
                    ],
                  },
                ],
              })
            } else {
              reject({
                status: 404,
                message: 'users chat not found.',
              })
            }
          }, 2000)
        })
      }
      
      const fetchFunc = async() =>{
          try {
            setloading(true)
            const response = await fakeFetch("https://example.com/api/userchat")
            if (response.status === 200) {
                setdata(response.data)
            }
        } catch (error) {
            console.log(error);
        }finally{
            setloading(false)
        }
      }
      useEffect(() => {
        fetchFunc()
      
      }, [])
      
  return (
    <div>
        {loading && <h1>Loading Chats...</h1>}
        <ul>
            {data.map((item, index) =>{
                return (
                    <>
                    <li key={index}><h1>{item.name}'s chat</h1></li>
                    <ul>
                        {item.messages.map((value, index) =>{
                            return <li key={index}><strong>{value.from}: </strong>{value.message}</li>
                        })}
                    </ul>
                    </>
                )
            })}
        </ul>
    </div>
  )
}

export default MsgList6