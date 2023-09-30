import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './views/Auth'

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />}/>
        {/* <Route path='/boards' element={}/> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App