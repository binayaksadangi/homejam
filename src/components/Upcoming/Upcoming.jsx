import React from 'react'
import {Grid,Container} from '@mui/material'
import Heading from '../Heading/Heading'
import ProfileCard from './ProfileCard'
import benny from '../../assets/benny.jpeg'
import andrea from '../../assets/andrea.jpeg'
import shilpa from '../../assets/shilpa.jpeg'
import vijay from '../../assets/vijay.jpeg'

const Upcoming = () => {
  const upcoming = [
      {id:1,image:`${benny}`,name:'Benny Dayal',label:'Flok'},
      {id:2,image:`${vijay}`,name:'Vijay Yesudas',label:'Bollywood'},
      {id:3,image:`${andrea}`,name:'Andrea Jeremiah',label:'Flok'},
      {id:4,image:`${shilpa}`,name:'Shilpa Rao',label:'Flok'}
  ]
  return (
    <Container  maxWidth="xl">
        <Heading title='Upcoming Shows'/>
        <Grid container spacing={2} >
            <Grid item container xs={12} spacing={2} style={{marginBottom:'144px'}}>
                {upcoming.map(item=>(
                    <Grid item xs={12} md={3}>
                        <ProfileCard key={item.id} item={item}/>
                    </Grid>
                ))}
            </Grid>  
        </Grid>
    </Container>
  )
}

export default Upcoming