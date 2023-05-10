import React, { useContext } from 'react'
import { BookContext } from './BooksContext';

const Profile = () => {
    const { profile } = useContext(BookContext);
  return (
    <div>
        <h1>{profile.name}</h1>
        <p>{profile.bio}</p>
        <img src={profile.img} alt="" srcset="" width="400px"/>
    </div>
  )
}

export default Profile