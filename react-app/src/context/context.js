import axios from 'axios';
import { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode'

export const AuthContext = createContext()



export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {

    if (localStorage.getItem('token')) {
      let token = JSON.parse(localStorage.getItem('token'))
      let access_Token = jwtDecode(token.accesstoken)
      return access_Token
    }
    return null;
  })

  const register = async (payload) => {
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/register`, payload)
    } catch (error) {
      console.log(error)

    }
  }

  const login = async (payload) => {
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/login`, payload)
      console.log(res.data)
      let accessToken = jwtDecode(res.data.accesstoken)
      setUser(accessToken);
      localStorage.setItem('token', JSON.stringify(res.data))
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <AuthContext.Provider value={{ login, register }}>
      {children}
    </AuthContext.Provider>
  )




}