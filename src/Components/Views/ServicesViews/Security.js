 import React from 'react';
 import {makeStyles, useTheme} from "@material-ui/styles";
 import Grid from "@material-ui/core/Grid";
 import Typography from "@material-ui/core/Typography";
 import CallToAction from "../../UI/CallToAction";
 import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
 import Hidden from "@material-ui/core/Hidden";
 import IconButton from "@material-ui/core/IconButton";
 import {Link} from "react-router-dom";
 import Card from "@material-ui/core/Card/Card";
 import CardContent from "@material-ui/core/CardContent";
 import Button from "@material-ui/core/Button";
 import ButtonArrow from "../../UI/ButtonArrow";


 import backArrow from "../../../assets/backArrow.svg";
 import analytics from "../../../assets/analytics.svg";
 import ecommerce from "../../../assets/ecommerce.svg";
 import infoBackGround from "../../../assets/infoBackground.svg";



 const useStyles = makeStyles(theme =>({
     mainContainer:{
         paddingLeft: "2em",
         paddingRight: "2em",
         [theme.breakpoints.down("sm")]: {
             paddingLeft:"1.5em",
             paddingRight:"1.5em"
         },
     },
     arrowContainer: {
         marginTop: "0.5em"
     },
     heading:{
         ...theme.typography.heading,
         maxWidth: "50em"
     },
     paragraphContainer: {
         maxWidth: "30em",
         [theme.breakpoints.down("md")]: {
             maxWidth:"40em"
         },
     },

     infoBackGround: {
         backgroundImage: `url(${infoBackGround})`,
         backgroundPosition: "center",
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         height: "100%",
         width: "100%"

     },
     revolutionCard: {
         position: "absolute",
         boxShadow: theme.shadows[10],
         borderRadius: 15,
         padding: "10em",
         [theme.breakpoints.down("sm")]: {
             padding:"8em",
             paddingBottom: "8em",
             paddingLeft: 0,
             paddingRight: 0,
             borderRadius: 0,
             width: "100%"
         }
     },
    })
 );


 export default function Security(props) {

     const classes = useStyles();// end of classes
     const theme = useTheme();
     const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
     const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

     return(
         <Grid container direction={"column"} className={classes.mainContainer}>
             <Grid item  container direction={"row"}
                   justify={matchesMD ? "center" : undefined}>
                 <Hidden mdDown>
                     <Grid item className={classes.arrowContainer}
                           style={{marginRight: "1em", marginLeft:"-2.5em"}}>
                         <IconButton style={{backgroundColor: "transparent"}}
                                     component={Link}
                                     to={"/custom-software"}
                                     onClick={() => props.setSelectedIndex(0)}>
                             <img src={backArrow} alt={"Back to Service Page"}/>
                         </IconButton>
                     </Grid>
                 </Hidden>
                 <Grid item container direction={"column"} className={classes.heading}>
                     <Grid item>
                         <Typography align={matchesMD ? "center" : undefined}
                                     variant={"h2"}>
                             Security
                         </Typography>
                     </Grid>
                     <Grid item>
                         <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph>
                             Having a website is a necessity in today’s business world. They give you one central,
                             public location to let people know who you are, what you do, and why you’re the best at it.
                         </Typography>
                         <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph>
                             From simply having your hours posted to having a full fledged online store, making yourself as
                             accessible as possible to users online drives growth and enables you to reach new customers.
                         </Typography>
                     </Grid>
                 </Grid>
             </Grid>
             {/*---end of heading container row---*/}
             <Grid item
                   container
                   style={{paddingTop:"3em"}}
                   alignItems={"center"}
                   direction={"row"}
                   className={classes.mainContainer}>
                 <Grid item>
                     <Grid item container direction={"column"}>
                         <Grid item>
                             <Typography align={matchesMD ? "center" : "left"}
                                         style={{ paddingBottom:"2.5em"}}
                                         variant={"h4"}>
                                 24/7 System Monitoring
                             </Typography>
                         </Grid>
                         <Grid item>
                             <img style={{marginLeft:"-2.75em"}}
                                  src={analytics}
                                  alt={"graph  with magnifying glass revealing 1's and 0's"}/>
                         </Grid>
                     </Grid>
                 </Grid>
                 <Grid item>
                     <Typography  className={classes.paragraphContainer} variant={"body1"} paragraph>
                         Knowledge is power, and data is 21st Century gold.
                         Analyzing this data can reveal hidden patterns and trends in your business,
                         empowering you to make smarter decisions with measurable effects.
                     </Typography>
                 </Grid>
             </Grid>
             {/*--end of the analytics section----*/}
             <Grid item
                   container
                   style={{paddingTop:"3em"}}
                   alignItems={"center"}
                   justify={"flex-end"}
                   direction={"row"}
                   className={classes.mainContainer}>
                 <Grid item>
                     <Grid item container direction={"column"}>
                         <Grid item>
                             <Typography align={matchesMD ? "center" : "center"}
                                         style={{ paddingBottom:"2.5em"}}
                                         variant={"h4"}>
                                 Penetration Testing
                             </Typography>
                         </Grid>
                         <Grid item>
                             <img align={matchesSM ? "center" : undefined}
                                  src={ecommerce}
                                  alt={"world outline made of  dollar signs"}/>
                         </Grid>
                     </Grid>
                 </Grid>
                 <Grid item style={{marginLeft:"1em", maxWidth: matchesSM ? "10em" : "25em"}}>
                     <Typography  className={classes.paragraphContainer} variant={"body1"} paragraph>
                         It’s no secret that people like to shop online.
                     </Typography>
                     <Typography  className={classes.paragraphContainer} variant={"body1"} paragraph>
                         In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.
                     </Typography>
                 </Grid>
             </Grid>
             {/*--end of e-commerce section----*/}
             <Grid item>
             {/*----Revolution Block----*/}
             <Grid container style={{height: "79em",paddingTop:"8em"}}
                   alignItems={"center"}
                   justify={"center"}>
                 <Card className={classes.revolutionCard}>
                     <CardContent>
                         <Grid container direction={"column"} style={{ textAlign: "center"}}>
                             <Grid item style={{textAlign: "center"}} >
                                 <Typography variant={"h3"} gutterBottom>
                                     Sleep Easy Knowing We Have Your Security Needs in Mind.
                                 </Typography>
                             </Grid>
                             <Grid item>
                                 <Typography variant={"subtitle1"}>
                                     Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                 </Typography>
                             </Grid>
                         </Grid>
                     </CardContent>
                 </Card>
                 <div className={classes.infoBackGround}/>
             </Grid>
         </Grid>
             <Grid item style={{paddingRight: matchesMD ? "3.85em" : 0 }}>
                 <Hidden xsDown>
                     <CallToAction setValue={props.setValue}/>
                 </Hidden>
             </Grid>

         </Grid>
         // end of main contianer
     );

 }
