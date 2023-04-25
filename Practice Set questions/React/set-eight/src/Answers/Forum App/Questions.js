import React, { useContext } from 'react'
import { ForumContext } from './ForumContext'
import { Link } from 'react-router-dom'

const Questions = () => {
  const { forumData , handleUpvote, handleDownvote} = useContext(ForumContext)
  return (
    <div>
      {forumData.map((item, index) => {
        return (
          <div key={item.id}>
            <h1>{item.question}</h1>
            <button onClick={()=>handleUpvote(item.id, index)}>Upvote</button>
            <button onClick={()=>handleDownvote(item.id, index)}>Downvote</button>
            <Link to={`/answer/${item.id}`}>
            <button>Answer</button>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Questions