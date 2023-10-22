import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Stack } from '@mui/material'

import logo from '../assets/images/Logo.png';

export default function Navbar({ user, setUser }) {
  const { email, name } = user;
  const navigate = useNavigate();
  
  const handleSignOut = async () => {
    try {
      var url = 'http://localhost:3090/auth/signout';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const responseData = await response.json();

        if (responseData) {
          setUser({});
        } else {
          console.log('navbar error');
        }
        
        navigate('/');
      }     
    } catch (error) {
      console.log("------Network Error: ", error);
    }
  }

  return (
    <Stack 
      direction=      "row"
      justifyContent= 'space-between' 
      alignItems=     'center' 
      sx=             {{ gap: {sm:'122px', xs:'40px'}, mt:{sm:'32px', xs:'20px'} }}
      px=             '20px'
    >
      <Link>
        <img src={logo} alt='logo' 
        style={{width:'48px', height:'48px', margin:'0 20px'}}/>
      </Link>
      <Stack
        direction=  "row"
        gap=        "40px"
        fontSize=   "18px"
        alignItems= "flex-end"
      >
        <Link to="/home" style={{textDecoration:'none', color:'#3A1212', borderBottom:'3px solid #FF2625'}}>Home</Link>
        <a href='#exercise' style={{textDecoration:'none',color:'#3A1212'}}>Exercises</a>

        <p>{name}</p>

        <Button
          onClick={handleSignOut}
        >Sign Out</Button>
      </Stack>
    </Stack>

  )
}
