import React from 'react'
import { Route,Routes } from 'react-router-dom';
import {Box} from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StartPage from './pages/StartPage';
export default function App() {
  return (
    <Box width="400px"
     sx={{width:{xl:'1600x'}}}
      m='auto'>
      <Navbar/> 
      {/* 1488 */}
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
      {/* <Footer/> */}
    </Box>
  )
}
