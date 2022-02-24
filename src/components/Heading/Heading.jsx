import { Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    line:{
        width: '5%',
        height: '2px',
        backgroundColor: 'blue',
        
    },
    root:{
        // border: '1px solid blue',
        marginTop: '1rem',
        marginBottom: '1rem',
        marginBottom:'48px'
    },
    title:{
        color:'#ffffff'
    }
})

const Heading = (props) => {
    const classes = useStyles();
  return (
      <>
      <div className={classes.root}>

        <Typography variant='h4' className={classes.title}>{props.title}</Typography>
        <div className={classes.line}></div>
      </div>
      </>
  )
}

export default Heading