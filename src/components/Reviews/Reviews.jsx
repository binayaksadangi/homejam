import React from 'react'
import Heading from '../Heading/Heading'
import {Container,Grid} from '@mui/material'
import pro1 from '../../assets/pro1.jpeg'
import pro2 from '../../assets/pro2.jpeg'
import pro3 from '../../assets/pro3.jpeg'
import ReviewCard from './ReviewCard'
const Reviews = () => {
    const reviews = [
        {id:1,name:'Hellen Jummy',country:'Palo Alto, CA',profile:`${pro1}`},
        {id:1,name:'Isaac Oluwatemilorun',country:'Palo Alto, CA',profile:`${pro2}`},
        {id:1,name:'Hellen Jummy',country:'Palo Alto, CA',profile:`${pro3}`},
    ]
  return (
    <Container   maxWidth="xl">
        <Heading title='Reviews'/>
        <Grid container spacing={2} >
            <Grid item container xs={12} spacing={2} style={{marginBottom:'144px'}}>
                {reviews.map(item=>(
                    <Grid item xs={12} md={4}>
                        <ReviewCard key ={item.id} item={item}/>
                    </Grid>
                ))}
            </Grid>  
        </Grid>
    </Container>
  )
}

export default Reviews