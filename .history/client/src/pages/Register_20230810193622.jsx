import {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const registerUser = async (e) => {
    e.preventDefault()
    console.log('Registering User...')
    const { name, email, password } = data
    try {
      console.log('Entered registerUser try{} block...')
      const { data } = await axios.post('/register', {
        name, email, password
      })
      console.log('data variable set.... moving to if(data.error) statement...')
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login successful... Welcome...')
        navigate('/login')
      }
    } catch (error) {
      
    }
  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder='Enter Name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
        <label>E-Mail</label>
        <input type='email' placeholder='Enter E-Mail...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <label>Password</label>
        <input type='password' placeholder='Enter Password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register
