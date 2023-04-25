import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { emailContext } from './EmailContext'

const EachMsg = () => {
    const {msgId} = useParams()
    const { emailData} = useContext(emailContext)
    let msgObj = emailData.find((item) => item.id === Number(msgId))
  return (
    <div><h1>{msgObj.subject}</h1><p><strong>Sender : </strong> {msgObj.sender}</p><p><strong>Message : </strong> {msgObj.message}</p></div>
  
  )
}

export default EachMsg