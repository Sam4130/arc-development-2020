import React from 'react';
import {makeStyles, useTheme} from "@material-ui/styles";
import Lottie from 'react-lottie';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom';
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

//animations
// core components
import CallToAction from "../../UI/CallToAction";
//images
import backArrow from "../../../assets/backArrow.svg";
import iphoneImage from '../../../assets/mobileIcon.svg';
import swissArmy from '../../../assets/swissKnife.svg';
import extendedAccess from '../../../assets/extendAccess.svg';
import increaseEngagement from '../../../assets/increaseEngagement.svg';








const useStyles = makeStyles(theme =>({
    mainContainer:{
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft:"1.5em",
            paddingRight:"1.5em"
        },
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    heading: {
       ...theme.typography.heading
    },
    control:{
        padding: theme.spacing(6),
    },
    })
);


export default function IosDevelopment(props) {

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
                          style={{marginRight: "1em", marginLeft:"-3.5em"}}>
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
                           iOS/Android App Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph>
                            Mobile apps allow you to take your tools on the go.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph>
                            Whether you want an app for your customers, employees, or yourself,
                            we can build cross-platform native solutions for any part of your business process.
                            This opens you up to a whole new world of possibilities by taking advantage of
                            phone features like the camera, GPS, push notifications, and more.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph>
                            Convenience. Connection.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/*--end of contianer direction row---*/}
            <Grid item
                  container
                  direction={"row"}
                  justify={"center"}
                  style={{ marginTop: "15em", marginBottom: "20em"}}>
                <Grid
                    item container
                    direction={"column"}
                    md
                    alignItems={"left"}
                    style={{maxWidth: "40em", marginTop: matchesSM ? "10em" : 0, marginBottom: matchesSM ? "10em" : 0 }}>
                    <Grid item>
                        <Typography variant={"h4"}>Integration</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : "left"} variant={"body1"} paragraph>
                            Our technology enables an innate interconnection between web and mobile applications,
                            putting everything you need right in one convenient place.
                        </Typography>
                        <Typography align={matchesMD ? "center" : "left"} variant={"body1"} paragraph>
                            This allows you to extend your reach, reinvent interactions,
                            and develop a stronger relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item container
                    direction={"column"}
                    md
                    alignItems={"center"}
                    style={{maxWidth: "40em", marginTop: matchesSM ? "8em" : 0, marginBottom: matchesSM ? "8em" : 0 }}>
                    <Grid item>
                        <img src={iphoneImage} alt={"phone screen Shot"}/>
                    </Grid>
                </Grid>
                <Grid
                    item container
                    direction={"column"}
                    md
                    alignItems={"right"}
                    style={{maxWidth: "40em", marginTop: matchesSM ? "8em" : 0, marginBottom: matchesSM ? "8em" : 0 }}>
                    <Grid item>
                        <Typography variant={"h4"}>Simultaneous Platform Support </Typography>
                    </Grid>
                    <Grid item>
                        <Typography  align={matchesMD ? "center" : undefined} variant={"body1"}>
                            Our cutting-edge development process allows us to create apps for iPhone,
                            Android, and tablets — all at the same time.
                        </Typography>
                        <Typography  align={matchesMD ? "center" : undefined} variant={"body1"}>
                            This significantly reduces costs and creates a
                            more unified brand experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/*----end of integration column layout---*/}
            <Grid
                item
                container
                direction={"row"}
                justify={"center"}
                style={{ marginTop: "15em", marginBottom: "20em"}}>
                {[0].map((value =>
                        <Grid key={value} className={classes.control}>
                            <Grid item
                                  container
                                  direction={"column"}
                                  md
                                  alignItems={"center"}
                                  style={{maxWidth: "30em", marginTop: matchesSM ? "8em" : 0, marginBottom: matchesSM ? "8em" : 0 }}>
                                <Typography variant={"h4"}>Extended Functionality</Typography>
                            </Grid>
                            <Grid item>
                                <img style={{maxHeight: matchesSM ? undefined : 500, maxWidth: matchesSM ? undefined : 280, paddingLeft:"1.75em"}} src={swissArmy} alt={"swiss-army-knife"}/>
                            </Grid>
                        </Grid>
                    )
                )}
                {[1].map((value =>
                            <Grid key={value} className={classes.control}>
                                <Grid item
                                      container
                                      direction={"column"}
                                      md
                                      alignItems={"center"}
                                      style={{maxWidth: "30em", marginTop: matchesSM ? "10em" : 0, marginBottom: matchesSM ? "5em" : 0 }}>
                                    <Typography variant={"h4"}>Extend Access</Typography>
                                </Grid>
                                <Grid item>
                                    <img style={{maxHeight: matchesSM ? undefined : 200, maxWidth: matchesSM ? undefined : 480, paddingTop:"2em" }} src={extendedAccess} alt={"extended-access-image"}/>
                                </Grid>
                            </Grid>
                    )
                )}
                {[1].map((value =>
                            <Grid key={value} className={classes.control}>
                                <Grid item
                                      container
                                      direction={"column"}
                                      md
                                      alignItems={"center"}
                                      style={{maxWidth: "30em", marginTop: matchesSM ? "10em" : 0, marginBottom: matchesSM ? "10em" : 0 }}>
                                    <Typography variant={"h4"}>Increase Engagement</Typography>
                                </Grid>
                                <Grid item>
                                    <img style={{maxHeight: matchesSM ? undefined : 500, maxWidth: matchesSM ? undefined : 280, paddingLeft:"2.5em" }}  src={increaseEngagement} alt={"increase-engagement-image"}/>
                                </Grid>
                            </Grid>
                    )
                )}
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
        {/*---end of call to action footer-----*/}
        </Grid>
        // ending main container

    );

}


