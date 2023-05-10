import React, { useContext } from 'react'
import { emailContext } from './EmailContext'

const Inbox = () => {
    const {emailData, handleReadFunc} = useContext(emailContext)
    const {read, unread} = emailData.reduce((acc, curr) =>{
        curr.read ? acc.read++: acc.unread++
        return acc
    } , {read: 0,unread:0})
  return (
    <div>
        <h1>Read emails: {read}</h1>
        <h1>Unread emails: {unread}</h1>
        {emailData.map((item) =>{
            return (
                <div key={item.id}>
                <h3>{item.subject}</h3>
                {item.read ? <button onClick={()=>handleReadFunc(item.id)}>Mark as Unread</button> : <button onClick={()=>handleReadFunc(item.id)}>Mark as Read</button>}
                </div>
            )
        })}
    </div>
  )
}

export default Inbox