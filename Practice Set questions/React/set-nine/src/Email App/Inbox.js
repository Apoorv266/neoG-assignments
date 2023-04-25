import React, { useContext } from 'react'
import { emailContext } from './EmailContext'
import { Link } from 'react-router-dom'

const Inbox = () => {
    const { emailData, handleReadFunc} = useContext(emailContext)
    const { read, unread } = emailData.reduce((acc, arr) => {
        return arr.read ? { ...acc, read: acc.read + 1 } : { ...acc, unread: acc.unread + 1 }

        //alternate way
        // arr.read ? acc.read++ : acc.unread++
        // return acc
    }, { read: 0, unread: 0 })
    return (
        <div>
            <h1>Inbox Page</h1>
            <p>Read messages : {read}</p>
            <p>Unread messages : {unread}</p>
            <ul>
                {emailData.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link to={`/message/id/${item.id}`}>
                            {item.subject}
                            </Link>
                            {"  "}{!item.read && <button onClick={()=>handleReadFunc(item.id)}>Make as read</button>}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Inbox