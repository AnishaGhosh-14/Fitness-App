import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
function Loader() {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' width='100%'>
        <h4 style={{color:'grey'}}>Loading....</h4>
    </Stack>
  )
}

export default Loader
