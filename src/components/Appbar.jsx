import React from 'react'
import { makeStyles } from '@mui/styles'
import { AppBar, Container, IconButton, Toolbar } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort';

const useStyles = makeStyles((theme)=>({
   icon:{
         color: 'white',
   },
   title:{
       flexGrow:1,
   }
}))
const Appbar = () => {
    const classes = useStyles();
  return (
    <div>
        <AppBar style={{background:'none'}} elevation={0}>
            <Container  maxWidth="xl">
                <Toolbar>
                    <h2 className={classes.title}>Homejam</h2>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    </div>
  )
}

export default Appbar