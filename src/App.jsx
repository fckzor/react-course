import React from 'react'
import { Context } from './hooks/Context'
import { Books } from './components/Books'

function App() {
  
  return (
    <div className="container">
      <Context>
        <Books />
      </Context>
    </div>
  )
}

export default App
