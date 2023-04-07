import React, { useEffect, useState } from 'react'

const MsgList6 = () => {
    const [data, setdata] = useState([])
    
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
        const response = await fakeFetch("https://example.com/api/userchat")
        if (response.status === 200) {
            setdata(response.data)
        }
      }
      useEffect(() => {
        fetchFunc()
      
      }, [])
      
  return (
    <div>
        <ul>
            {data.map((item) =>{
                return (
                    <>
                    <li><h1>{item.name}'s chat</h1></li>
                    <ul>
                        {item.messages.map((value) =>{
                            return <li><strong>{value.from}: </strong>{value.message}</li>
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