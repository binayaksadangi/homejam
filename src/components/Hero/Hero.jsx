import React from "react";
import hero from "../../assets/hero.jpg";
import { Container, Grid, Typography,Box,Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Appbar from "../Appbar";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const useStyles = makeStyles({
  box: {
   position: "absolute",
    marginTop: "100px",
    marginLeft: "150px",
    width: "auto",
    height: "auto",
  },
  circle:{
     display: "flex",
     flexWrap: "wrap",
    position: "absolute",
    //backgroundColor: "white",
    marginTop: "652px",
    marginLeft: "150px",
    width: "auto",
    height: "auto",
  },
  circleBox:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid blueviolet",
    marginLeft:'50px',
    marginBottom: "20px",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
  },
 boxText:{
    fontSize:'80px',
    color:'white',
 },
 lable:{
    color:'#ffffff',
 },
 boxSubText:{
    fontSize:'24px',
    color:'white',
    opacity:'0.6',
    maxWidth:'611px'
 },
  heroImg: {
  
    minHeight: "100vh",
    backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('${hero}')`,
     position:'relative',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    backgroundRepeat: "no-repeat",
  },
});
const Hero = () => {
  const classes = useStyles();
  return (
    <>
      
      <Appbar />
      <div className={classes.heroImg}>
         <div className={classes.box} >
            <h1 className={classes.boxText}>Cari Cari</h1>
            <p className={classes.boxSubText}>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
         </div>
         <div className={classes.circle}> 
            <Box className={classes.circleBox}>
                <Stack style={{display:'flex',alignItems:'center'}}>
                    <FavoriteBorderIcon fontSize="small" style={{color:'blueviolet'}}/>
                    <Typography variant="body1" component="p"  className={classes.lable}>0</Typography>
                    <Typography variant="body1" component="p"  className={classes.lable}>Lable</Typography>
                </Stack>
            </Box>
            <Box className={classes.circleBox}>
                <Stack style={{display:'flex',alignItems:'center'}}>
                    <FavoriteBorderIcon fontSize="small" style={{color:'blueviolet'}}/>
                    <Typography variant="body1" component="p"  className={classes.lable}>0</Typography>
                    <Typography variant="body1" component="p"  className={classes.lable}>Lable</Typography>
                </Stack>
            </Box>
            <Box className={classes.circleBox}>
                <Stack style={{display:'flex',alignItems:'center'}}>
                    <FavoriteBorderIcon fontSize="small" style={{color:'blueviolet'}}/>
                    <Typography variant="body1" component="p"  className={classes.lable}>0</Typography>
                    <Typography variant="body1" component="p"  className={classes.lable}>Lable</Typography>
                </Stack>
            </Box>
            <Box className={classes.circleBox}>
                <Stack style={{display:'flex',alignItems:'center'}}>
                    <FavoriteBorderIcon fontSize="small" style={{color:'blueviolet'}}/>
                    <Typography variant="body1" component="p" className={classes.lable}>0</Typography>
                    <Typography variant="body1" component="p" className={classes.lable}>Lable</Typography>
                </Stack>
            </Box>
         </div>
      </div>
    </>
  );
};

export default Hero;
