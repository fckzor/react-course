import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'
import './style.css'
import App from './App'

let isLoading = false

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App isLoading={isLoading} />
  </React.StrictMode>
)
