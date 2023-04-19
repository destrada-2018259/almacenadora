import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDoList from './components/ToDoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>,
)
