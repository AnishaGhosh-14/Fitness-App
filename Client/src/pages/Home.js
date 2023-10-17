import React, { useState } from 'react'
import {Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercise from '../components/Exercise';

export default function Home() {
  const [bodyPart,setBodyPart]=useState('all');
  const [exercises,setExercises]=useState([])
  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercise setExercises={setExercises} bodyPart={bodyPart} Exercise={exercises}/>
    </Box>
  )
}
