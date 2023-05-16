import React, { useContext } from 'react'
import "../Styles/Details.css"
import { Link, useParams } from 'react-router-dom'
import { emailContext } from '../Contexts/EmailContext'

const MailDetail = () => {
    const {mailId} = useParams()
    const {emailData} = useContext(emailContext)
    const obj = emailData.find(item => item.mId === mailId)
  return (
    <div className='detail-main'>
        <div className='detail-child'>
        <h2>Subject : {obj.subject}</h2>
        <p>{obj.content}</p>
        <p><strong>Read : </strong>{obj.unread ? "No" : "Yes"}</p>
        <p><strong>Starred : </strong>{obj.isStarred ? "Yes" : "No"}</p>
        <Link to={"/"}>
        <button className='inboxBtn'>Back to Inbox !</button>
        </Link>
        </div>
    </div>
  )
}

export default MailDetail