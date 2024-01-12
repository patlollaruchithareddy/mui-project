import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import { AccountCircle, Menu, Notifications } from '@mui/icons-material'
import React from 'react'

const Header = () => {
  return (
    <>
    <Toolbar>
        <IconButton>
            <Menu/>
        </IconButton>
        <Typography variant='h6'>Blog Website</Typography>
        <IconButton>
            <Badge badgeContent={4} color='primary'><Notifications/></Badge>
        </IconButton>
        <IconButton>
            <AccountCircle/>
        </IconButton>
        </Toolbar>
    <Divider/>
    <Toolbar>Express your emotions through words</Toolbar>
    </>
  )
}

export default Header