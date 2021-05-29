import React from 'react'
import {useParams} from  "react-router-dom"
import ShoeData from "./ShoeData"




import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: "100vw",
      height: "100vh",
      backgroundColor:"lightblue"
    },
  },
}));





export default function Shoe() {
    const {shoename}  = useParams()
    const classes = useStyles();
   const shoe  = ShoeData[shoename]
 
    console.log(shoe)

    return (

        <div className={classes.root} style={{textAlign:"center",marginTop:100}}>
           <Paper elevation={3} >
           <h1>{shoe.name}</h1>
           <br></br> 
           <img src={shoe.img} alt={shoe.name} style={{width:"50%"}}></img>
           <br></br>
           <p>
               {shoe.des}
           </p>
           </Paper>
        </div>
    )
}
