import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ForumContext } from './ForumContext'

const Answers = () => {
  const { forumData } = useContext(ForumContext)
  const {answerId} = useParams()

  let answerObj = forumData.find(item => item.id === Number(answerId))
  
  return (
    <div>
      <h1>Answer :</h1>
  <p>{answerObj.answer}</p>
      <Link to={"/questions"}>Back to Questions</Link>
      <br/>
      <Link to={"/"}>Back to Home</Link>
    </div>
  )
}

export default Answers