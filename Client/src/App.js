import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import {Box} from '@mui/material';

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Footer from './components/Footer';
import StartPage from './pages/StartPage';

export default function App() {
  const [user, setUser] = useState({});

  return (
    <Box width="400px"
     sx={{width:{xl:'1600x'}}}
      m='auto'>
      <Routes>
        <Route path='/' element={<StartPage setUser={setUser} />}/>
        <Route path='/home' element={<Home user={user} setUser={setUser} />}/>
        <Route path='/exercise/:id' element={<ExerciseDetail user={user} />}/>
      </Routes>
      {/* <Footer/> */}
    </Box>
  )
}
