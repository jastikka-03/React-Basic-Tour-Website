import { AppBar, Avatar, Box, styled, Toolbar, Typography } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import React from 'react'


const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between',
})


const NavBar = () => {
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6'>Tour</Typography>
            <Box sx={{display:'flex',alignItems:'center',gap:'20px'}}>
            <Badge badgeContent={4} color="success">
               <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={2} color="error">
               <NotificationsActiveIcon color="action" />
            </Badge>
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
            </Box>
        </StyledToolbar>
    </AppBar>
  )
}

export default NavBar
