import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./components/static/home";
import Header from "./components/static/header";
import Footer from "./components/static/footer";
import LogIn from "./components/auth/login";
import { useState } from "react";
import { useEffect } from "react";
import Logout from "./components/auth/logout";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import About from "./components/static/about";
import SignUp from "./components/auth/signup"
import MyHotel from "./components/hotels/MyHotel";
import AllHotels from "./components/hotels/AllHotels";
import MyAccount from "./components/accounts/MyAccount";
import HotelDetails from "./components/hotels/HotelDetails";
import BookingHistory from "./components/history/BookingHistory";
import PaymentHistory from "./components/history/PaymentHistory";
import AccountDetails from "./components/accounts/AccountDetails";

// import { useNavigate } from 'react-router-dom';



function App() {

  const [user, setUser] = useState()
  const navigate = useNavigate();
  useEffect(() => {
    userStatus()

  }, [])

  const userStatus =  () => {
    const data =  localStorage.getItem('UserStatus');
    if (data) {
      setUser(JSON.parse(data))
      console.log(data)
      // navigate('/')
    }
    else {
       setUser()
      // navigate('/')
    }
  }

  const toastMsg = (func, msg, time) => {
    func(msg, {
      position: "top-center",
      autoClose: time || 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const logIn = (details) => {
    // console.log(details)
    localStorage.setItem('UserStatus', JSON.stringify(details))
    toastMsg(toast.success, '🦄 You have login sucessfully!', 1500)
    userStatus()
    navigate('/account')

  }

  const logout = async () => {
    await localStorage.removeItem('UserStatus')
    toastMsg(toast.success, '🦄You have successfully logged out!!!...', 1500)
    userStatus()
    navigate('/')

    console.log('log out successfully')
  }

  return (

    <>
    
      <Header user={user} />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<LogIn onSave={(d) => logIn(d)} toastMsg={(fun, msg, time) => toastMsg(fun, msg, time)} />} />
        <Route path="/signup" element={<SignUp onSave={(d) => logIn(d)} toastMsg={(fun, msg, time) => toastMsg(fun, msg, time)} />} />
        <Route path="/logout" element={<Logout onLogout={() => logout()} toastMsg={(fun, msg, time) => toastMsg(fun, msg, time)}/>} />
        <Route path="/about" element={<About user={user} />} />
        <Route path="/myHotel" element={<MyHotel toastMsg={(fun, msg, time) => toastMsg(fun, msg, time)}/>} />
        <Route path="/bookings" element={<BookingHistory toastMsg={toastMsg}/>} />
        <Route name='hotelDetail' path="/hotelDetail" element={<HotelDetails toastMsg={toastMsg}/>} />
        <Route path="/account" element={<MyAccount toastMsg={(fun, msg, time) => toastMsg(fun, msg, time)}/>} />
        <Route path="/accountDetails" element={<AccountDetails toastMsg={toastMsg}/>} />
        <Route path="/history" element={<PaymentHistory toastMsg={toastMsg}/>} />
        {/* <Route path="/myHotel/add" element={<AddHotel  userDetails={user}  toastMsg={(fun, msg, time) => toastMsg(fun, msg, time)}/>} /> */}
        <Route path="/hotels" element={<AllHotels toastMsg={(fun, msg, time) => toastMsg(fun, msg, time)}/>} />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
