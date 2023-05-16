import React, { createContext, useReducer, useState } from 'react'
import { mails } from '../Data/Data'


export const emailContext = createContext()
const EmailContextFunc = ({ children }) => {

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "DELETE":
        return state.map((item) => item.mId === action.payload ? { ...item, isDlt: true } : item)
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
  const [checkBox, setCheckBox] = useState({
    box1: false,
    box2: false,
    box3: false,
  })

  const unreadData = checkBox.box1 ? emailData.filter(item => item.unread) : emailData

  const readData = checkBox.box2 ? unreadData.filter(item => !item.unread) : unreadData

  const filteredData = checkBox.box3 ? readData.filter(item => item.isStarred) : readData

  const countValue = emailData.reduce((acc, curr) => {
    if (curr.isSpam && curr.isDlt) {
      return { ...acc, spamVal: acc.spamVal + 1, dltVal: acc.dltVal + 1 }
    }
    if (curr.isSpam) {
      return { ...acc, spamVal: acc.spamVal + 1 }
    }
    if (curr.isDlt) {
      return { ...acc, dltVal: acc.dltVal + 1 }
    }
    if (curr.unread) {
      return { ...acc, unReadVal: acc.unReadVal + 1 }
    }
    return acc
  }, { spamVal: 0, dltVal: 0, unReadVal : 0 })

  
  

  return (
    <emailContext.Provider value={{ filteredData, dispatch, countValue, setCheckBox , checkBox}}>{children}</emailContext.Provider>
  )
}

export default EmailContextFunc