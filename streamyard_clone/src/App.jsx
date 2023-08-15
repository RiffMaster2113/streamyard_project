import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NabBar'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {


  return (
    <>
      
      <Router>
      <NavBar />
        <Routes>
          <Route path = '/' element={<Landing />} />
          <Route path = '/login' element={<Login />} />
          <Route path = '/register' element={<Register />} />
          <Route path = '/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
