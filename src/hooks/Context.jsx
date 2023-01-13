import React, {createContext, useState} from 'react'

export const CustomContext = createContext()

export function Context(props) {
  const [books, setBooks] = useState([
    {id: 1, name: 'JS'},
    {id: 2, name: 'React'},
    {id: 3, name: 'Vue'},
  ])

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  const value = {
    books,
    removeBook,
  }

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  )
}