import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"

const useCheckIsLogin = () => {
  const navigate = useNavigate();
  const data = localStorage.getItem('UserStatus');
  useEffect(() => {
    if (data) {
      // return JSON.parse(data)
      // setUser(JSON.parse(data))
      // navigate('/')
    }
    else {
      console.log('here')

      navigate('/login')
    }
  },[])
  // return
  // return null
  return JSON.parse(data)
}

export default useCheckIsLogin
