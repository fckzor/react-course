import React, { useContext } from 'react'
import { Book } from './Book'
import { CustomContext } from '../hooks/Context'

export function Books() {
  const { books } = useContext(CustomContext)

  return (
    <>
      {books.map(book => (
        <Book key={book.id} {...book} />
      ))}
    </>
  )
}