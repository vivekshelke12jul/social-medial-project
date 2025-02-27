import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import './App.css'
import Authentication from './pages/authentication/Authentication'
import HomePage from './pages/home/HomePage'
import Message from './pages/message/Message'
import { getProfileAction } from "./redux/auth/auth.action";
function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("in app auth : ", auth)
  const jwt = localStorage.getItem("jwt")
  useEffect(() => {
    dispatch(getProfileAction(jwt));
  }, [jwt]);
  
  return (
    <div>
      <Routes>
        <Route path="/*" element={auth.user? <HomePage />: <Authentication />} />
        <Route path="/message" element={<Message />} />
        <Route path="/*" element={<Authentication />} />
      </Routes>
    </div>
  )
}

export default App