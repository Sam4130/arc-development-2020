import React from 'react';
import {makeStyles, useTheme} from "@material-ui/styles";
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden  from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip";

//animations
import documentsAnimation from '../../../animations/documentsAnimation/data';
import scaleAnimation from '../../../animations/scaleAnimation/data';
import automationAnimation from '../../../animations/automationAnimation/data';
import uxAnimation from '../../../animations/uxAnimation/data'

// core copmonets
//images
import backArrow from '../../../assets/backArrow.svg';
import forwardArrow from '../../../assets/forwardArrow.svg';
import lightbulb from '../../../assets/bulb.svg';
import cash from '../../../assets/cash.svg';
import stopwatch from '../../../assets/stopwatch.svg';
import roots from '../../../assets/root.svg';

// components
import CallToAction from "../../UI/CallToAction";



const useStyles = makeStyles(theme =>({
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    rowContainer:{
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("md")] :{
            paddingRight: "2.5em",
            paddingLeft: "2.5em"
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft:"1.5em",
            paddingRight:"1.5em"
        },
    },
    itemContainer: {
        maxWidth: "200em",
        [theme.breakpoints.down("md")]: {
          maxWidth:"40em"
        },
        [theme.breakpoints.down("sm")] :{
            maxWidth:"25em"
        },
        paddingTop:"10em",

    },
    digitalContainer:{
        position:"absolute",
        paddingLeft:"8.5em",
        [theme.breakpoints.down("xs")]: {
            marginTop: "5em",
            position: "relative",
            paddingLeft: "3em"
        }

    }
    })
);


export default function CustomService(props) {

    const classes = useStyles();// end of classes
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const documentsOptions = {
        loop: true,
        autoplay: false,
        animationData: documentsAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
    };
    const scaleOptions = {
        loop: true,
        autoplay: false,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const automationOptions = {
        loop: true,
        autoplay: false,
        animationData: automationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const uxOptions = {
        loop: true,
        autoplay: false,
        animationData: uxAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return(
        <Grid container direction={"column"} className={classes.rowContainer}>
            {/*----Custom Software Section------*/}
            <Grid item
                  container
                  direction={"row"}
                  justify={matchesMD ? "center" : undefined}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}
                          style={{marginRight: "1em", marginLeft:"-3.5em"}}>
                        <IconButton style={{backgroundColor: "transparent"}}
                                    component={Link}
                                    to={"/services"}
                                    onClick={() => props.setSelectedIndex(0)}>
                            <img src={backArrow} alt={"Back to Service Page"}/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction={"column"} className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined}
                                    variant={"h2"}>
                            Custom Software Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph>
                            Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph>
                            Using regular commercial software leaves you with a lot of stuff you don’t need,
                            without some of the stuff you do need, and ultimately controls the way you work.
                            Without using any software at all you risk falling behind competitors
                            and missing out on huge savings from increased efficiency.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph>
                            Our custom solutions are designed from the ground up with your needs, wants,
                            and goals at the core. This collaborative process produces finely tuned software
                            that is much more effective at improving your workflow and
                            reducing costs than generalized options.
                        </Typography>
                        <Typography variant={"body1"} paragraph>
                            We create exactly what you what, exactly how you want it.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor: "transparent"}}
                                    component={Link}
                                    to={"/mobile-apps"}
                                    onClick={() => props.setSelectedIndex(2)}>
                            <img src={forwardArrow} alt={"Forard to iOS/Android App Development Page"}/>
                        </IconButton>
                    </Grid>
                </Hidden>

            </Grid>
            {/*-------end of item continaer row-------*/}
            <Grid item
                  container
                  direction={"row"}
                  justify={"center"}
                  style={{ marginTop: "15em", marginBottom: "20em"}}>
                <Grid item container
                      direction={"column"}
                      md
                      alignItems={"center"}
                      style={{maxWidth: "40em", marginTop: matchesSM ? "10em" : 0, marginBottom: matchesSM ? "10em" : 0 }}>
                    <Grid item>
                        <Typography variant={"h4"}>Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightbulb} alt={"lightbulb"}/>
                    </Grid>
                </Grid>
                <Grid item container
                      direction={"column"}
                      md
                      alignItems={"center"}
                      style={{maxWidth: "40em", marginTop: matchesSM ? "10em" : 0,
                          marginBottom: matchesSM ? "10em" : 0 }}>
                    <Grid item>
                        <Typography variant={"h4"}>Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopwatch} alt={"stopwatch"}/>
                    </Grid>
                </Grid>
                <Grid
                    item container
                    direction={"column"}
                    md
                    alignItems={"center"}
                    style={{maxWidth: "40em" }}>
                    <Grid item>
                        <Typography variant={"h4"}>Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt={"cash"}/>
                    </Grid>
                </Grid>
            </Grid>
            {/*----end of 3 image column---*/}
            <Grid item
                  contianer
                  direction={ matchesMD ? "column" : "row"}
                  alignItems={matchesMD ? "center" : undefined}
                  justify={"space-around"}
             >
                <Grid item
                      container
                      className={classes.itemContainer}
                      style={{ marginBottom: matchesMD ? "15em" : 0}}
                      md>
                    <Grid item container direction={"column"} md>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant={"h4"} style={{paddingBottom:".5em"}}>
                                Digital Documents & Data
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph>
                                Billions are spent annually on the purchasing, printing,
                                and distribution of paper.
                                On top of the massive environmental impact this has,
                                it causes harm to your bottom line as well.
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph>
                                By utilizing digital forms and documents
                                you can remove these obsolete expenses,
                                accelerate your communication, and help the Earth.
                            </Typography>
                        </Grid>
                    {/*--end of body item--*/}
                    </Grid>
                    <Grid item md>
                        <Tooltip disableFocusListener title={"Digital Downloads"}>
                        <Lottie options={documentsOptions}
                                isStopped={false}
                                style={{maxHeight: 325, maxWidth: 280, paddingLeft: "10em"}} />
                        </Tooltip>
                    </Grid>
                {/*---end of image ---*/}
                </Grid>
                {/*----end of item container----*/}
                {/*----Scale Section------*/}
                <Grid item
                      container
                      className={classes.itemContainer}
                      style={{ marginBottom: matchesMD ? "15em" : 0}}
                      md>
                        <Grid item md>
                            <Lottie options={scaleOptions}
                                    isStopped={false}
                                    style={{maxHeight: 260, maxWidth: 280, paddingLeft:matchesXS ? "5em" : "10em"}}
                                    align={"center"}/>
                        </Grid>
                        {/*---end of image ---*/}

                        <Grid item container direction={"column"} md align={ matchesXS ? "center" : "right"}
                              style={{paddingLeft:matchesXS ? "2em" : "8em", paddingTop: matchesSM ? "8em" : undefined}}>
                            <Grid item>
                                <Typography align={matchesMD ? "center" : undefined} variant={"h4"}>
                                    Scale
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography align={matchesMD ? "center" : undefined}
                                            variant={"body1"}
                                            style={{ paddingRight: matchesXS ? ".5em" : undefined}} paragraph >
                                    Whether you’re a large brand, just getting started,
                                    or taking off right now, our application
                                    architecture ensures pain-free growth and reliability.
                                </Typography>
                            </Grid>
                            {/*--end of body item--*/}
                        </Grid>
                </Grid>
            {/*----end of item continaer-----*/}
            </Grid>
            <Grid item container direction={"row"}>
                <Grid item container direction={"column"} alignItems={"center"}>
                    <Grid item>
                        <img src={roots} alt={"tree with roots "} height={ matchesXS ? "237em" : "450em"} width={ matchesXS ? "345em" : "450em"}/>
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography align={matchesMD ? "center" : undefined} variant={"h4"} align={"center"} gutterBottom> Root-Cause Analysis</Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant={"body1"} align={"center"} paragraph>
                            Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant={"body1"} align={"center"} paragraph>
                            We can help you thoroughly examine all areas of your business to develop a
                            holistic plan for the most effective implementation of technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        {/*-----end of item container row-----*/}
        {/*----Automation Section------*/}
            <Grid item
                  contianer
                  direction={"row"}
                  style={{marginBottom: "10em"}}
                  justify={"space-around"}
                 >
                <Grid item container
                      className={classes.itemContainer}
                      justify={"space-around"}
                      style={{marginBottom: matchesMD ? "4em" : 0, paddingLeft:"10.5em"}} md>
                    <Grid item container direction={"column"} md>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant={"h4"}
                                        style={{paddingBottom: matchesMD ? ".5em" : "1.5em" }}>
                                Automation
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph>
                                Why waste time when you don’t have to?
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph>
                                We can help you identify processes with time or
                                event based actions which can now easily be automated.
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph>
                                Increasing efficiency increases profits,
                                 leaving you more time to focus on your business, not busywork
                            </Typography>
                        </Grid>
                        {/*--end of body item--*/}
                    </Grid>
                    <Grid item md >
                        <Lottie options={automationOptions}
                                isStopped={false}
                                style={{maxHeight: 325, maxWidth: 280 , paddingLeft: matchesXS ? "3em" : undefined }} />
                    </Grid>
                    {/*---end of image ---*/}
                </Grid>
                {/*----end of item container----*/}
                <Grid item container className={classes.itemContainer} md>
                    <Grid item md>
                        <Lottie options={uxOptions}
                                isStopped={false}
                                style={{ maxHeight: 310, maxWidth: 155 }} />
                    </Grid>
                    {/*---end of image ---*/}

                    <Grid item container direction={"column"} md align={"right"}>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant={"h4"}>
                               User Experience Design
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph >
                                A good design that isn’t usable isn’t a good design
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph >
                                So why are so many pieces of software complicated, confusing, and frustrating?
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant={"body1"} paragraph >
                                By prioritizing users and the real ways they interact with technology we’re able to
                                develop unique, personable experiences that solve problems rather than create new ones.
                            </Typography>
                        </Grid>
                        {/*--end of body item--*/}
                    </Grid>
                </Grid>
                {/*----end of item continaer-----*/}
            </Grid>
            <Grid item style={{paddingRight: matchesMD ? "3.85em" : 0 }}>
                <Hidden xsDown>
                    <CallToAction setValue={props.setValue}/>
                </Hidden>
            </Grid>
        </Grid>
    //    end of top row

    );

}
