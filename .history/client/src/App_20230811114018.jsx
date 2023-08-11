import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, Login, Register } from './pages'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './context/userContext'

axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.withCredentials = true

function App() {

  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    <UserContextProvider/>
  )
}

export default App
