import React, { useContext } from 'react'
import { emailContext } from './EmailContext'
import { Link } from 'react-router-dom'

const Sent = () => {
    const { emailData} = useContext(emailContext)
  return (
    <div><ul>
    {emailData.sent.map((item) => {
        return (
            <li key={item.id}>
                <Link to={`/message/id/${item.id}`}>
                {item.subject}
                </Link>
            </li>
        )
    })}
</ul></div>
  )
}

export default Sent