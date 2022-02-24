import React from 'react'
import { makeStyles } from '@mui/styles'
import { AppBar, Container, IconButton, Toolbar } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort';
import logo from '../assets/logo.svg'
const useStyles = makeStyles((theme)=>({
   icon:{
         color: 'white',
   },
   logo:{
       flexGrow:1,
   }
}))
const Appbar = () => {
    const classes = useStyles();
  return (
    <div>
        <AppBar style={{background:'none',position:'fixed'}} elevation={0}>
            <Container  maxWidth="xl">
                <Toolbar>
                    <img src={logo} alt="" />
{/*                    
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton> */}
                </Toolbar>
            </Container>
        </AppBar>
    </div>
  )
}

export default Appbar