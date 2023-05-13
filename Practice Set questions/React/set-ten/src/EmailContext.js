import React, { createContext, useState } from 'react'
import { mails } from './Data'


export const emailContext = createContext()
const EmailContextFunc = ({children}) => {
    const [emailData, setemailData] = useState(mails)
    
  return (
    <emailContext.Provider value={{emailData}}>{children}</emailContext.Provider>
  )
}

export default EmailContextFunc