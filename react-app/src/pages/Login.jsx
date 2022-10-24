import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/context'
import { toast } from 'react-hot-toast'
const Login = () => {
  const { login } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const res = await login({ email, password })
      toast.success('Login Successful')
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email" placeholder='Enter email' />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password" placeholder='Enter password' />
        <button className='loginBtn' onClick={handleLogin}>Login</button>
        <span>Don't have an account? <Link className='link' to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login