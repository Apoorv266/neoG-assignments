import React, { useContext } from 'react'
import RenderMails from './RenderMails';
import { emailContext } from '../Contexts/EmailContext';

const Trash = () => {

  const { filteredData ,countValue} = useContext(emailContext);
  let dltArray = filteredData.filter(item => item.isDlt)
  let unreadMsg = dltArray.filter(item => item.unread)
  return (
    <>
     <h2>Unread: {unreadMsg.length}</h2>
    {dltArray.length === 0 && <h1 style={{width: "80vw"}}>Trash is empty</h1>}
    <RenderMails data={dltArray}/>
    </>
  )
}

export default Trash