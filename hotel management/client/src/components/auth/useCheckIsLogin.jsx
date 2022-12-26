import { Routes, Route, useNavigate } from "react-router-dom"

const useCheckIsLogin = () => {
  const navigate = useNavigate();
  const data = localStorage.getItem('UserStatus');
  if (data) {
    return JSON.parse(data)
    // setUser(JSON.parse(data))
    // navigate('/')
  }
  else {
    
    navigate('/login')
  }
  return null
}

export default useCheckIsLogin
