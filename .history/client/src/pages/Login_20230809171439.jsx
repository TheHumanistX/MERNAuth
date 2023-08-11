import { useState } from 'react'

const Login = () => {

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = (e) => {
    e.preventDefault()
    console.log('Login User')
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
