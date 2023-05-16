import React, { useContext } from 'react'
import { emailContext } from '../Contexts/EmailContext';
import RenderMails from './RenderMails';

const Spam = () => {
  const { filteredData } = useContext(emailContext);
  let spamArray = filteredData.filter(item => item.isSpam)
  let unreadMsg = spamArray.filter(item => item.unread)
  return (
    <>
    <h2>Unread: {unreadMsg.length}</h2>
    {spamArray.length === 0 && <h1 style={{width: "80vw"}}>No spam emails</h1>}
    <RenderMails data={spamArray}/>
    </>
  )
}

export default Spam