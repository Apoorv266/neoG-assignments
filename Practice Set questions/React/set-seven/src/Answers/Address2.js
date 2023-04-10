import React, { useEffect, useState } from 'react'

const Address2 = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (url === "https://example.com/api/user") {
              resolve({
                status: 200,
                message: "Success",
                data: {
                  name: "John Doe",
                  email: "john.doe@example.com",
                  phone: "+1 555-555-5555",
                  address: {
                    street: "123 Main St",
                    suite: "Suite 456",
                    city: "Anytown",
                    zipcode: "12345"
                  }
                }
              });
            } else {
              reject({
                status: 404,
                message: "User not found."
              });
            }
          }, 2000);
        });
      };

      const [data, setdata] = useState(null)
      const [toggle, settoggle] = useState(false)

      const fetchFunc = async () =>{
        const response = await fakeFetch("https://example.com/api/user")
        if (response.status === 200) {
            setdata(response.data)
        }
      }

      useEffect(() => {
        fetchFunc()
      }, [])

      const handleClick = () =>{
        settoggle(!toggle)
      }
  return (
    <div>
         {data ? (
             <div>
            <h1>User Details</h1>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <button onClick={handleClick}>{toggle ? "Hide" : "Show"} Address</button>
          {toggle && (
            <div>
              <p>Street: {data.address.street}</p>
              <p>Suite: {data.address.suite}</p>
              <p>City: {data.address.city}</p>
              <p>Zipcode: {data.address.zipcode}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Address2