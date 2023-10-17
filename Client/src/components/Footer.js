import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Logo from '../assets/icons/gym.png'
const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4' className='footer-container'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        {/* <img src={Logo} alt="logo" width='50px' height='50px' /> */}

        <Typography variant='h6'>
        © 2023 Anisha Ghosh 
        </Typography>

        <p className='icons'>
          <a href=''style={{color:'#FF2625'}}><InstagramIcon/></a>

          <a href='https://www.linkedin.com/in/anisha-ghosh-9704591b9/' style={{color:'#FF2625' ,fontSize:"2rem"}}><LinkedInIcon/></a>

          <a href='https://github.com/AnishaGhosh-14'style={{color:'#FF2625'}}><GitHubIcon/></a>
        </p>
      </Stack>
    </Box>
  )
}

export default Footer