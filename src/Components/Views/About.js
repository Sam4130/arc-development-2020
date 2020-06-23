import React from 'react';
import {makeStyles, useTheme} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Avatar from '@material-ui/core/Avatar';



// core components
import CallToAction from "../UI/CallToAction";
//images
import history from '../../assets/history.svg';
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import yearbook from '../../assets/yearbook.svg';
import puppy from '../../assets/puppy.svg';
import profile from '../../assets/profile-pic-2.jpg'


const useStyles = makeStyles(theme =>({
    mainContainer:{
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft:"1.5em",
            paddingRight:"1.5em",
        },
    },
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4
    },
    historyContainer: {
        marginTop:"12em",
        marginLeft: "6em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    icon:{
        marginLeft:"2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    paragraphContainer: {
        maxWidth: "70em",
    },
    avatar: {
        height:"22em",
        width: "23em",
    }
    })
);


export default function SectionHero(props) {

    const classes = useStyles();// end of classes
    // mobile optmization section
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));


    return(




        <Grid container direction={"column"}>
            <Grid item className={classes.mainContainer} style={{marginTop: "1em"}}>
                <Typography
                            variant={"h2"} style={{marginBottom: "1em"}}>
                            About Us
                </Typography>
            </Grid>
                <Grid item container justify={"center"} className={classes.mainContainer} style={{marginBottom:"10em"}}>
                    <Typography variant={"h4"} align={"center"} className={classes.missionStatement}>
                        Whether it be person to person, business to consumer, or an individual to their interests,
                        technology is meant to bring us closer to what we care about in the best way possible.
                        Arc Development will use that principle to provide fast, modern, inexpensive,
                        and aesthetic software to the Midwest and beyond.
                    </Typography>
                </Grid>
        {/*--end of mission statement container --*/}
            <Grid item
                  container
                  className={classes.historyContainer}
                  style={{ marginBottom: matchesMD ? "15em" : 0}}
                  md>
                <Grid item container direction={"column"} lg >
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined}
                                    variant={"h4"}
                                    style={{paddingBottom:".5em" }}>
                           A Little History
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.paragraphContainer}
                                    align={matchesMD ? "center" : undefined}
                                    variant={"subtitle1"} paragraph
                                    style={{ fontWeight: 700, fontStyle: "italic"}}>
                            We’re the new kid on the block.
                        </Typography>
                        <Typography className={classes.paragraphContainer}
                                    align={matchesMD ? "center" : undefined}
                                    variant={"body1"} paragraph>
                            Founded in 2019, we’re ready to get our hands on the world’s business problems.
                        </Typography>
                        <Typography className={classes.paragraphContainer}
                                    align={matchesMD ? "center" : undefined}
                                    variant={"body1"} paragraph>
                            It all started with one question: Why aren’t all businesses using available technology?
                            There are many different answers to that question: economic barriers, social barriers,
                            educational barriers, and sometimes institutional barriers.
                        </Typography>
                        <Typography className={classes.paragraphContainer}
                                    align={matchesMD ? "center" : undefined}
                                    variant={"body1"} paragraph>
                            We aim to be a powerful force in overcoming these obstacles.
                            Recent developments in software engineering and computing power,
                            compounded by the proliferation of smart phones, has opened up infinite worlds
                            of possibility. Things that have alw ays been done by hand can now be done
                            digitally and automatically, and completely new methods of interaction
                            are created daily. Taking full advantage of these advancements is the
                            name of the game.
                        </Typography>
                        <Typography className={classes.paragraphContainer}
                                    align={matchesMD ? "center" : undefined}
                                    variant={"body1"} paragraph>
                            All this change can be a lot to keep up with, and that’s where we come in.
                        </Typography>
                    </Grid>
                    {/*--end of body item--*/}
                </Grid>
                <Grid item md>
                    <Tooltip disableFocusListener title={"Technology Options Animation"}>
                        <img className={classes.icon} alt={"history book"} src={history}
                             style={{marginLeft:"8em", maxHeight:375}}/>
                    </Tooltip>
                </Grid>
                {/*---end of image ---*/}
            </Grid>
    {/*----end of item container----*/}
            <Grid item container direction={"column"} alignItems={"center"}
                  className={classes.mainContainer}>
                <Grid item>
                    <Typography variant={"h4"} align={"center"} gutterBottom>
                        Team
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant={"body1"} paragraph align={"center"}>
                        Sam Schoenberg
                    </Typography>
                    <Typography variant={"body1"} paragraph align={"center"}
                                style={{ fontWeight: 700, fontStyle: "italic"}}>
                        Front End Developer
                    </Typography>
                    <Typography variant={"body1"} paragraph align={"center"} >
                        Been coding sense 2018
                    </Typography>
                </Grid>
                <Grid item style={{marginBottom:"8em"}}>
                    <Avatar alt={"founder"} src={profile} className={classes.avatar}></Avatar>
                </Grid>
                <Grid item container>
                    <Grid item container direction={"column"} lg>
                        <Grid item>
                            <img src={yearbook}  alt={"year book page founder"}/>
                        </Grid>
                        <Grid item>
                            <Typography variant={"caption"}>
                                a picture of a year book
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg style={{maxWidth: "45em", padding: "1.25em"}}>
                        <Typography variant={"body1"} align={"center"} paragraph>
                            I taught myself basic coding from a library book in third grade, and ever since
                            then my passion has solely been set on learning — learning about computers, learning
                            mathematics and philosophy, studying design, always just learning.
                        </Typography>
                        <Typography variant={"body1"} align={"center"} paragraph>
                            Now I’m ready to apply everything I’ve learned, and to help others
                            with the intuition I have developed.
                        </Typography>
                    </Grid>
                    <Grid item
                          container
                          direction={"column"}
                          lg
                          alignItems={"flex-end"}>
                        <Grid item>
                            <img src={puppy} alt={"grey spotted puppy"}/>
                        </Grid>
                            <Grid item>
                                <Typography variant={"caption"}>
                                    my miniature dapple dachshund, Doggy
                                </Typography>
                            </Grid>
                    </Grid>
                </Grid>
            </Grid>
        {/*--end of about section---*/}
        <Grid style={{paddingTop:"8em"}}>
            <CallToAction/>
        </Grid>
        {/*-- end of call to action --*/}
        </Grid>
    //end of main container

    );

}
