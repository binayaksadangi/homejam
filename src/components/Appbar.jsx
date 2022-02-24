import React from 'react'
import { makeStyles } from '@mui/styles'
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/logo.svg'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
const useStyles = makeStyles((theme)=>({
    btn:{
        color:'#ffffff',
    }
}))
const Appbar = () => {
    const classes = useStyles();
  return (
    <div>
        <AppBar style={{background:'none',position:'fixed'}} elevation={0}>
            <Container  maxWidth="xl">
                <Toolbar>
                    <div style={{flexGrow:1}}>
                          <img src={logo} alt="" />
                    </div>
                    <Button startIcon={<SearchIcon/>} style={{color:'white'}}>Search</Button>
                    <Button style={{color:'white'}}>Help</Button>
                    <Button style={{color:'white'}}>About</Button>
                    <IconButton>
                        <ShoppingBagOutlinedIcon style={{color:'white'}}/>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    </div>
  )
}

export default Appbar