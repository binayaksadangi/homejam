import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    text:{
        color:'#ffffff',
        fontSize:'16px',
        lineHeight:'24px',
    },
    title:{
        color:'#ffffff',
    },
    subTitle:{
        color:'#E5C558',
    }
})

const ReviewCard = ({ item }) => {
  const classes = useStyles();
  return (
    <>
      <Card
        sx={{
          background: "#0A0B1A",
          borderRadius: "16px",
          border: "2px solid #E5AF56",
        }}
      >
        <CardHeader
          avatar={<Avatar src={item.profile}/>}
          title={<Typography className={classes.title}>{item.name}</Typography>}
          subheader={<Typography className={classes.subTitle}>{item.country}</Typography>}
        />
        <CardContent>
          <Typography className={classes.text} variant=""  component="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            deleniti minima, hic tenetur id odit omnis sunt earum quas soluta
            voluptate voluptas! Cupiditate, minus officia.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ReviewCard;
