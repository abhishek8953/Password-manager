import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import axios from 'axios'
import './Index.css'


axios.defaults.baseURL=import.meta.env.VITE_API_HOST;
axios.defaults.withCredentials=true;

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  
)
