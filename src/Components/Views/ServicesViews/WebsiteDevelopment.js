import React from 'react';
import {makeStyles, useTheme} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import CallToAction from "../../UI/CallToAction";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";

//compoents
    //images
import backArrow from "../../../assets/backArrow.svg";
import analytics from "../../../assets/analytics.svg";
import ecommerce from '../../../assets/ecommerce.svg'
import outReach from '../../../assets/outreach.svg';
import seo from '../../../assets/seo.svg';

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
    itemContainer: {
        maxWidth: "200em",
        [theme.breakpoints.down("md")]: {
            maxWidth:"40em"
        },
        paddingTop:"10em",

    },
    heading:{
        ...theme.typography.heading
    },
    paragraphContainer: {
        maxWidth: "30em",
        [theme.breakpoints.down("md")]: {
            maxWidth:"40em"
        },
    }
    })
);


export default function WebsiteDevelopment(props) {

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
                            Website Development
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
                                        variant={"h4"}>
                                Analytics
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
                                        variant={"h4"}>
                                E-Commerce
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
                                        variant={"h4"}>
                                Out-Reach
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img style={{marginLeft:"-2.75em"}}
                                 src={outReach}
                                 alt={"horn making noise"}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft:"1em"}}>
                    <Typography  className={classes.paragraphContainer} variant={"body1"} paragraph>
                        Draw people in with a dazzling website. Showing off your products
                        online is a great way to help customers
                        decide what’s right for them before visiting in person.
                    </Typography>
                </Grid>
            </Grid>
            {/*---end of outreach section----*/}
            <Grid item
                  container
                  style={{paddingTop:"3em", paddingBottom: matchesSM ? "3em" : "10em"}}
                  alignItems={"center"}
                  justify={"flex-end"}
                  direction={"row"}
                  className={classes.mainContainer}>
                <Grid item>
                    <Grid item container direction={"column"}>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : "center"}
                                        variant={"h4"}>
                                Search Engine Optimization
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img align={matchesSM ? "center" : undefined}
                                 src={seo}
                                 alt={"computer in the first place postion"}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft:"1em", maxWidth: matchesSM ? "10em" : "30em"}}>
                    <Typography  className={classes.paragraphContainer} variant={"body1"} paragraph>
                        How often have you ever been to the second page of Google results?
                    </Typography>
                    <Typography  className={classes.paragraphContainer} variant={"body1"} paragraph>
                        If you’re like us, probably never.
                    </Typography>
                    <Typography  className={classes.paragraphContainer} variant={"body1"} paragraph>
                        Customers don’t go there either, so we make sure your website is designed to end up on top.
                    </Typography>
                </Grid>
            </Grid>
            {/*---search engine optimization----*/}
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
            {/*---end of call to action footer-----*/}
        </Grid>
        //end of main containers
    );

}
