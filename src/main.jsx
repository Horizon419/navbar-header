import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './body/About/About'
import Services from './body/Services/Services'
import Work from './body/Work/Work'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      
          <Route path='/' element={<App />}/>
          <Route path='About' element={<About />}/>
          <Route path='Services' element={<Services />}/>
          <Route path='Work' element={<Work />}/>
          <Route path='*' element={<main><p>No page found</p></main>}/>
      
    </Routes>   
    </BrowserRouter>
    
  </React.StrictMode>
)
