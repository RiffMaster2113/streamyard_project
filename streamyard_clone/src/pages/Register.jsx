import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    registerHandler();
    setEmail("");
    setPassword("");
  };

  const registerHandler = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/signup', {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('Authorization', 'Bearer ' + token);
    } catch (error) {
      console.error('Error: ' + error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-80 h-80 bg-gray-200 rounded-lg p-4">
          <Typography className="text-center">Create Your Account</Typography>
          <div className="pt-4">
            <label>
              Email address <br />
              <TextField
                variant="outlined"
                type="email"
                required
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <br />
            <label>
              Password <br />
              <TextField
                variant="outlined"
                type="password"
                required
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
            <br />
            <Button onClick={handleSubmit}>Register</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
