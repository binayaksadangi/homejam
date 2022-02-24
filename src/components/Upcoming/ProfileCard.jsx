import React from 'react'
import { Card, CardContent, CardMedia,  IconButton, Typography,Chip } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
const useStyles = makeStyles({
    label:{
        
        color: '#000000',
        fontSize: '10px',
        fontWeight: '600',
        padding: '2px 6px',
       marginBottom: '10px',
    },
    name:{
        color:'#ffffff',
        fontSize:'20px'
    },
    moreSection:{
        marginTop:'18px',
        display:'flex',
        alignItems:'center',

    },
    moreText:{
        color:'#0259EB',
        paddingRight:'1px'
    },
    divider:{
        width:'1px',
        height:'32px',
        backgroundColor:'#ffffff',
        opacity:'0.1',
    },
    arrow:{
       
        '&:hover':{
            paddingLeft:'10px',
            cursor:'pointer',
            transition: 'all 0.7s ease-in-out',
        }
    },
    moreStyle:{
        display:'flex',
        flexGrow:'1',
    },
    save:{
        color:'#2A2E3B',
        transform:' matrix(1, 0, 0, 1, 0, 0)',
    }
})

const ProfileCard = ({item}) => {
    const classes = useStyles();
  return (
    <>
        <Card sx={{background:"#111229",borderRadius:'8px',}}>
           <CardMedia
           component="img"
           alt="green iguana"
           height="230"
           width='268'
           sx={{backgroundSize: 'cover'}}
           image={item.image}
           />
           <CardContent>
           <Chip label={item.label} className={classes.label} sx={{backgroundColor:'#E5C558'}}/>
            <Typography className={classes.name} variant='' component='div'> {item.name}</Typography>
            <div className={classes.moreSection}>
                <div className={classes.moreStyle}>

                <Typography className={classes.moreText} variant='' component='div'> More Info</Typography>
                <ArrowForwardIcon fontSize='small' sx={{color:'#0259EB'}} className={classes.arrow}/>
                </div>
                <div className={classes.divider}></div>
                <IconButton>
                    <LoyaltyOutlinedIcon fontSize='small' className={classes.save}/>
                </IconButton>
            </div>
           </CardContent>
        </Card>
    </>
  )
}

export default ProfileCard