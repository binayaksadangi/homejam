import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Flags from 'country-flag-icons/react/3x2'

const useStyles = makeStyles({
  text: {
    color: "#ffffff",
    fontSize: "16px",
    lineHeight: "24px",
  },
  title: {
    color: "#ffffff",
  },
  subTitle: {
    color: "#E5C558",
  },
  flag:{
      width:'24px',
      marginRight:'8px'
  }
});

const ReviewCard = ({ item }) => {
  const classes = useStyles();
  return (
    <>
      <Card
        sx={{
          background: "#0A0B1A",
          borderRadius: "16px",
          border: "2px solid #E5AF56",
          boxShadow: '20px -14px 0px -5px rgba(39, 108, 115, 1)',
          marginRight: "16px",

        }}
      >
        <CardHeader
          avatar={<Avatar src={item.profile} />}
          title={<Typography className={classes.title}>{item.name}</Typography>}
          subheader={
              <Stack direction='row'>
            <Flags.US className={classes.flag}/>
            <Typography className={classes.subTitle}>{item.country}</Typography>
              </Stack>
          }
        />
        <CardContent>
          <Typography className={classes.text} variant="" component="">
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
