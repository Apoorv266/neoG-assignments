import React, { useContext } from 'react'
import { booksContext } from './BookContext';

const BookProfile = () => {
    const { userDetails} = useContext(booksContext);
  return (
    <div>
        <h1>
        Profile</h1>
        <img src={userDetails.img} alt="" width={"400px"} />
        <p><strong>Name : </strong>{userDetails.name}</p>
        <p><strong>Bio : </strong>{userDetails.bio}</p>
        </div>
  )
}

export default BookProfile