import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = async (e) => {
    e.preventDefault()
    console.log('Login User')
    
    const { email, password } = data;
    
    try {
      const { data } = await axios.post('/login', {
        email, 
        password
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login Successful...')
        navigate('/dashboard')
      }
      
    } catch (err) {
      console.error('Error on login: ', err)
    }

  }

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>E-Mail</label>
        <input type='email' placeholder='Enter E-Mail...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <label>Password</label>
        <input type='password' placeholder='Enter Password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
