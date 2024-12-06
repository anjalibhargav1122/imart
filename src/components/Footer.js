import React from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  boxShadow: 'none',
  padding: theme.spacing(1),
  color: theme.palette.text.dark,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Footer = () => {
  return (
    <div>
      <Container maxWidth="lg" className='pt-10 pb-10'>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 1, md: 0 }}>

          <Grid size={9} className="flex items-center">
            <Item className='flex '>
              <a href='#' className='text-[#a0a0b2] text-sm ff2 zoom'>
                COOKIES</a> <a className='text-[#a0a0b2] text-sm ff2 ms-16 zoom' href='#'>STUDIOWAAZ</a>-EN ESKUTIK <p className='ms-8'>© IMART 2022</p>
            </Item>
          </Grid>
          <Grid size={3}>
            <Item >
              <p className='text-5xl'>imart</p>
            </Item>
          </Grid>



        </Grid>
      </Container>
    </div>
  )
}

export default Footer