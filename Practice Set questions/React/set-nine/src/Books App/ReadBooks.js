import React, { useContext } from 'react'
import { booksContext } from './BookContext'

const ReadBooks = () => {
    const { data, addToFavFunc } = useContext(booksContext)
  return (
    <div>ReadBooks</div>
  )
}

export default ReadBooks