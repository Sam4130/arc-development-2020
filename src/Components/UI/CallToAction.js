 import React from 'react';
 import {makeStyles, useTheme} from "@material-ui/styles";
 import {Link} from 'react-router-dom';

 // amterial-ui components
 import Grid from "@material-ui/core/Grid";
 import Typography from "@material-ui/core/Typography";
 import Button from "@material-ui/core/Button";
 import ButtonArrow from "./ButtonArrow";
 import useMediaQuery from "@material-ui/core/useMediaQuery";

//images
 import background from '../../assets/background.jpg';
 import mobileBackground from '../../assets/mobileBackground.jpg';


 // core components

 const useStyles = makeStyles(theme =>({
     learnButton: {
         ...theme.typography.learnButton,
         fontSize: "0.7rem",
         height: 35,
         padding: 5,
         [theme.breakpoints.down("sm")]: {
             marginBottom: "2em",
             marginLeft: "14em"
         },
         [theme.breakpoints.down("xs")] : {
             alignItems: "center",
             marginLeft: "14em"
         }
     },
     background: {
         backgroundImage: `url(${background})`,
         backgroundPosition: "center",
         backgroundSize: "cover",
         backgroundAttachment: "fixed",
         backgroundRepeat: "no-repeat",
         height: "60em",
         width: "100%",
         [theme.breakpoints.down("md")]: {
             backgroundImage: `url(${mobileBackground})`,
             backgroundAttachment: 'inherit'
         }
     },
     estimateButton: {
         ...theme.typography.estimate,
         borderRadius: 50,
         height: 80,
         width: 205,
         backgroundColor: theme.palette.common.orange,
         "&:hover": {
             backgroundColor: theme.palette.secondary.light
         },
         fontSize: "1.5rem",
         marginRight:"5em",
         marginLeft:"2em",
         [theme.breakpoints.down("sm")]: {
             marginLeft: 0,
             marginRight: 0
         }
     },

 }) );


 export default function CallToAction(props) {

     const classes = useStyles();
     const theme = useTheme();
     const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

     return(
        <Grid container
              alignItems={"center"}
              className={classes.background}
              justify={matchesSM ? "center" : "space-between"}
              direction={matchesSM ? "column" : "row"}
        >
            <Grid item
                  style={{ marginLeft: matchesSM ? 0 : "5em", texAlign: matchesSM ? "center" : "inherit"}}>
                <Grid container direction={"column"}>
                    <Grid item>
                        <Typography variant={"h2"} style={{textAlign: matchesSM ? "center" : undefined}}> Simple Software <br /> Revolutionary
                        Results.</Typography>
                        <Typography variant={"subtitle2"} style={{ fontSize: '1.5em', textAlign: matchesSM ? "center" : undefined }}>
                            Take advantage of the 21st Century.
                        </Typography>
                    </Grid>
                    <Grid contianer justify={matchesSM ? "center" : undefined} item>
                        <Button component={Link} to={"/estimates"}
                            variant={"outlined"}
                                className={classes.learnButton}
                                onClick={() => props.setValue(2)}>
                            <span style={{marginRight: 5}}>Learn More</span>
                            <ButtonArrow width={10}
                                         height={10}
                                         fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button component={Link} to={"/estimates"}
                    variant={"contained"} className={classes.estimateButton}
                        onClick={() => props.setValue(5)}>Free Estimate</Button>
            </Grid>
        </Grid>
     );

 }
