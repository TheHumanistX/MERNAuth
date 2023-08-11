import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, Login, Register } from './pages'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
