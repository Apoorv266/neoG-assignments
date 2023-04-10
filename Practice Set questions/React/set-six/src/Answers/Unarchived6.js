import React, { useEffect, useState } from 'react'

const Unarchived6 = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (url === 'https://example.com/api/habits') {
              resolve({
                status: 200,
                message: 'Success',
                data: {
                  habits: [
                    {
                      title: 'Drinking enough water',
                      desc: 'Aim to drink 5-6L of water each day to stay hydrated',
                      daysFollowed: 7,
                      daysSkipped: 3,
                      archived: false,
                    },
                    {
                      title: 'Exercise',
                      desc: 'Track your workouts and aim to exercise a certain number of days per week',
                      daysFollowed: 10,
                      daysSkipped: 4,
                      archived: true,
                    },
                    {
                      title: 'Meditation',
                      desc: 'Track your daily meditation practice and try to increase the length of your sessions over time',
                      daysFollowed: 30,
                      daysSkipped: 7,
                      archived: true,
                    },
                    {
                      title: 'Gratitude',
                      desc: 'Write down something you are grateful for each day',
                      daysFollowed: 11,
                      daysSkipped: 5,
                      archived: false,
                    },
                    {
                      title: 'Saving Money',
                      desc: 'Track your expenses and set a goal to save a certain amount of money each month',
                      daysFollowed: 40,
                      daysSkipped: 15,
                      archived: false,
                    },
                  ],
                },
              })
            } else {
              reject({
                status: 404,
                message: 'Habits not found.',
              })
            }
          }, 2000)
        })
      }

      const [data, setdata] = useState([])
      const [toggle, settoggle] = useState(false)
      const headerTxt = toggle ? 'Archived' : 'Unarchived';
      const filteredHabits = data.filter((habit) => habit.archived === toggle);

      const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/habits")
        if (response.status === 200) {
              setdata(response.data.habits);
        }
    }

    const handleShowArchivedClick = () => {
        settoggle(!toggle);
      };
    

    useEffect(() => {
        fetchFunc()
    }, [])

  return (
    <div>
       <button onClick={handleShowArchivedClick}>
        {toggle ? 'Show Unarchived' : 'Show Archived'}
      </button>
        <h1>{headerTxt}</h1>
        {filteredHabits.map((item) =>{
            return (
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <p><strong>Days Followed :</strong>{item.daysFollowed}  Days</p>
                    <p><strong>Days Skipped : </strong>{item.daysSkipped} Days</p>
                </div>
            )
        })}
    </div>
  )
}

export default Unarchived6