import React from 'react'
import ReactDOM from 'react-dom/client'
import Welcome from './Welcome'
import Circles from './Circles'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Circles/>
    <Welcome />
  </React.StrictMode>,
)
