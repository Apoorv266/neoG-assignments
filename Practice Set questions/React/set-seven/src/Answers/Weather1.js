import React, { useEffect, useState } from 'react'

const Weather1 = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (url === "https://example.com/api/weather") {
              resolve({
                status: 200,
                message: "Success",
                data: {
                  temperature: 21,
                  humidity: 50,
                  windSpeed: 10
                }
              });
            } else {
              reject({
                status: 404,
                message: "Weather data not found."
              });
            }
          }, 2000);
        });
      };

      const [data, setdata] = useState({})
      const [toggle, settoggle] = useState(false)

      const fetchFunc = async () =>{
        const response = await fakeFetch("https://example.com/api/weather")
        if (response.status === 200) {
            setdata(response.data)
        }
      }

      useEffect(() => {
        fetchFunc()
      }, [])

      const handleFunc = (value) =>{
        settoggle(!toggle)
        let val = toggle ? (value - 32) * 5/9   : (value * 9/5) + 32
        setdata({...data, temperature: val})
      }
      
  return (
    <div>
        <h1>Weather</h1>
        <p><strong>temperature : </strong>{data.temperature} {toggle ? "°F" : "°C"}</p>
        <p><strong>humidity : </strong>{data.humidity} %</p>
        <p><strong>windSpeed : </strong>{data.windSpeed} Km/h</p>
        <button onClick={()=> handleFunc(data.temperature)}>Convert to {toggle ? "Celsius" : "Fahrenheit"}</button>
    </div>
  )
}

export default Weather1