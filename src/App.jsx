import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditSsection from './components/EditSsection'
import HomePage from './pages/HomePage'
const App = () => {
  return (
    <div className='MAIN'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/editSection/:data' element={<EditSsection/>}/>
          {/* <Route path='/editSection/:data' element={<AddModal/>}/> */}

        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App