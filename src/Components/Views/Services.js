import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles, useTheme} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";


//images
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../../assets/mobileIcon.svg";
import websitesIcon from "../../assets/websiteIcon.svg";

// core components
import ButtonArrow from "../UI/ButtonArrow";


const useStyles = makeStyles(theme =>({

    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: '1em'
    },
    icon:{
        marginLeft:"2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop:"12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    })
);


export default function Services(props) {

    const classes = useStyles({});// end of classes
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        <Grid container direction={"column"}>
            <Grid item
                style={{marginLeft: matchesSM ? 0 : "5em",
                       marginTop: matchesSM ? "1em" : "2em"}}>
                <Typography align={matchesSM ? "center" : undefined}
                            variant={"h2"}
                            gutterBottom style={{ marginLeft: matchesSM ? 0 : "5em"}}>
                    Services
                </Typography>
            </Grid>
            <Grid item>
                {" "}

                {/*--------iOS/Android Block-----------*/}
                <Grid container
                      direction={"row"}
                      justify={matchesSM ? "center": "flex-end"}
                      className={classes.serviceContainer}
                      style={{marginTop: matchesSM ? "1em" : '5em'}}
                >
                    <Grid item
                          style={{
                              textAlign: matchesSM ? "center" : undefined,
                              width: matchesSM ? undefined : "35em"
                          }}
                    >
                        <Typography variant={"h4"}>iOS/Android App Development</Typography>
                        <Typography variant={"subtitle1"} className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant={"subtitle1"} >
                            Integrate your web experience or create a standalone
                            app{matchesSM ? null : <br/>}with either mobile platform
                        </Typography>
                        <Button component={Link} to={"/mobile-apps"}
                                variant={"outlined"} className={classes.learnButton}
                                onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10}
                                         height={10}
                                         fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 :"5em"}}>
                        <img className={classes.icon}
                             alt={"mobile app icon"}
                             src={mobileAppsIcon}
                             width={"250em"}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {" "}
                {/*--------Custom Software Block-----------*/}
                <Grid container
                      direction={"row"}
                      justify={matchesSM ? "center": undefined}
                      className={classes.serviceContainer}
                >
                    <Grid item style={{marginLeft: matchesSM ? 0 :"5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant={"h4"}>Custom Software</Typography>
                        <Typography variant={"subtitle1"} className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant={"subtitle1"} >
                            Complete digital solutions, from investigation to {" "}
                            <span className={classes.specialText}>celebration</span>
                        </Typography>
                        <Button component={Link} to={"/custom-software"}
                                variant={"outlined"} className={classes.learnButton}
                                onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10}
                                         height={10}
                                         fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt={"custom software icon"} src={customSoftwareIcon}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {" "}

                {/*--------Website Block-----------*/}
                <Grid container
                      direction={"row"}
                      justify={matchesSM ? "center": "flex-end"}
                      className={classes.serviceContainer}
                >
                    <Grid item style={{textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant={"h4"}>Website Development</Typography>
                        <Typography variant={"subtitle1"} className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant={"subtitle1"} >
                            Optimized from  Search Engines, built for speed.
                            app{matchesSM ? null : <br/>}with either mobile platform
                        </Typography>
                        <Button component={Link} to={"/websites"}
                                variant={"outlined"} className={classes.learnButton}
                                onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10}
                                         height={10}
                                         fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 :"5em"}}>
                        <img className={classes.icon}
                             alt={"website icon"}
                             src={websitesIcon}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {" "}

                {/*--------Security Service Block-----------*/}
                <Grid container
                      direction={"row"}
                      justify={matchesSM ? "center": undefined}
                      className={classes.serviceContainer}
                      style={{marginBottom: matchesSM ? '5em' : '10em'}}
                >
                    <Grid item style={{
                        marginLeft: matchesSM ? "1em" : "5em",
                        textAlign: matchesSM ? "center" : undefined,
                        width: matchesSM ? undefined : "35em"}}>
                        <Typography variant={"h4"}>Security Testing</Typography>
                        <Typography variant={"subtitle1"} className={classes.subtitle}>
                            Pen-testing and Bug Identification. Security Audits.
                        </Typography>
                        <Typography variant={"subtitle1"} >
                            Feel at Ease Knowing that We are Monitoring Your
                            app{matchesSM ? null : <br/>}day or night
                        </Typography>
                        <Button component={Link} to={"/security"}
                                variant={"outlined"} className={classes.learnButton}
                                onClick={() => {props.setValue(1); props.setSelectedIndex(4)}}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10}
                                         height={10}
                                         fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 :"5em"}}>
                        <img className={classes.icon}
                             alt={"mobile app icon"}
                             src={mobileAppsIcon}
                            width={"250em"}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );

}
