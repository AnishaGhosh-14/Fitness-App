import React, { useState } from 'react'
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercise from '../components/Exercise';
import Navbar from '../components/Navbar';

export default function Home({ user, setUser }) {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([])

  return (
    <Box>
      <Navbar user={user} setUser={setUser} />
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercise setExercises={setExercises} bodyPart={bodyPart} Exercise={exercises} />
    </Box>
  )
}
