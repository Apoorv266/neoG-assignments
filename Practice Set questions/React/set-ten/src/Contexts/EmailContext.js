import React, { createContext, useReducer } from 'react'
import { mails } from '../Data/Data'


export const emailContext = createContext()
const EmailContextFunc = ({ children }) => {

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "DELETE":
        return state.filter(item => item.mId !== action.payload)
      case "STAR":
        return state.map((item) => item.mId === action.payload ? { ...item, isStarred: !item.isStarred } : item)
      case "READ":
        return state.map((item) => item.mId === action.payload ? { ...item, unread: !item.unread } : item)
      case "SPAM":
        return state.map((item) => item.mId === action.payload ? item.hasOwnProperty("isSpam") ? { ...item, isSpam: !item.isSpam } : { ...item, isSpam: true } : item)
      default:
        return state
    }
  }
  const [emailData, dispatch] = useReducer(reducerFunc, mails)


  return (
    <emailContext.Provider value={{ emailData, dispatch }}>{children}</emailContext.Provider>
  )
}

export default EmailContextFunc