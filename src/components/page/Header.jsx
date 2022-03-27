import { AppBar, Box, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../tools/Theme'
import './stylesheets/Header.css'

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
        <AppBar className='header'>
            <Box>
                <Typography variant='h4'>GAME TRACKER</Typography>
            </Box>
        </AppBar>
    </ThemeProvider>
  )
}
