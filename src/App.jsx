import { Route, Routes } from 'react-router-dom'
import './App.css'
import Authentication from './pages/authentication/Authentication'
import HomePage from './pages/home/HomePage'
import Message from './pages/message/Message'
function App() {

  return (
    <div>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/message" element={<Message />} />
        <Route path="/*" element={<Authentication />} />
      </Routes>
    </div>
  )
}

export default App