import  React, {useState} from 'react'
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    loginRequest();
    setEmail("");
    setPassword("");
  }

  const loginRequest = async() => {
    
    try {
      const response = await axios.post("http://localhost:3000/user/login", {email, password})
      const token = response.data.token;
      localStorage.setItem("Authorization", "Bearer " + token)
    } catch (error) {
      console.error("Error: " + error)
    }
  }
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center">
        <div className="bg-gray-200 w-80 h-80 rounded-lg p-4">
          <Typography className="text-center">Login</Typography>
          <label>
            <p>Email</p>
          <TextField value={email} type='email' required onChange={(e) => setEmail(e.target.value)}></TextField>
            <br />
          </label>

          <label>
            <p>Password</p>
          <TextField value={password} type='password' required onChange={(e) => setPassword(e.target.value)}></TextField>
            <br />
          </label>

          <Button onClick={loginHandler}>Login</Button>
          
        </div>
      </div>
    </>
  )
}

export default Login
