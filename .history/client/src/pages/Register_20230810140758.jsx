import {useState} from 'react'
import axios from 'axios'

const Register = () => {

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
      const data = await axios.post('/register', {
        name, email, password
      })
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
