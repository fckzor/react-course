import React, { useContext } from 'react'
import { CustomContext } from '../hooks/Context'

export function Book(props) {
  const { removeBook } = useContext(CustomContext)

  return (
    <h3 onClick={() => removeBook(props.id)}>{props.name}</h3>
  )
}