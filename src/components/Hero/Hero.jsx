import React from 'react'
import hero from '../../assets/hero.jpg'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Appbar from '../Appbar'
const useStyles = makeStyles({
    txt:{
        border: '1px solid red',
    },
    heroImg:{
        minHeight: '100vh',
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('${hero}')`,
       
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
    }
})
const Hero = () => {
    const classes = useStyles();
  return (
    <>
        <div className={classes.heroImg}>
            <Appbar/>
        </div>

    </>
  )
}

export default Hero