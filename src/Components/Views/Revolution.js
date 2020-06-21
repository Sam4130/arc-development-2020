import React from 'react';
import {makeStyles, useTheme} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Lottie from "react-lottie";


//animations
import technologyAnimation from '../../animations/technologyAnimation/data';

// core copmonets
import CallToAction from "../UI/CallToAction";
//images
import backArrow from "../../assets/backArrow.svg";
import vision from '../../assets/vision.svg';
import consultation from '../../assets/consultationIcon.svg'
import mockupicon from '../../assets/mockupIcon.svg';
import reviewicon from '../../assets/reviewIcon.svg';
import designicon from '../../assets/designIcon.svg';
import buildicon from '../../assets/buildIcon.svg';
import launchicon from '../../assets/launchIcon.svg';
import maintainIcon from '../../assets/maintainIcon.svg';
import iterateIcon from '../../assets/iterateIcon.svg';










const useStyles = makeStyles(theme =>({
    mainContainer:{
        paddingLeft: "2em",
        paddingRight: "2em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft:"1.5em",
            paddingRight:"1.5em"
        },
    },
    itemContainer: {
        maxWidth: "200em",
        paddingLeft: "5em",
        paddingRight: "10em",
        [theme.breakpoints.down("md")]: {
            maxWidth:"100em",
            paddingLeft:"2.5em",
            paddingRight:"7.5em"
        },[theme.breakpoints.down("sm")]: {
            maxWidth:"100em",
            paddingLeft:"1em",
            paddingRight:"4.75em"
        },
        paddingTop:"10em",
    },
    paragraphContainer: {
        maxWidth: "40em",

        [theme.breakpoints.down("md")]: {
            maxWidth:"25em"
        },
    }
    })
);


export default function Revolution(props) {

    const classes = useStyles();// end of classes
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const  technologyOptions = {
        loop: true,
        autoplay: false,
        animationData: technologyAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return(
        <Grid container direction={"column"} className={classes.mainContainer}>
            <Grid item  container direction={"row"}
                  justify={matchesMD ? "center" : undefined}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}
                          style={{marginRight: "1em", marginLeft:"-2.5em"}}>
                        <IconButton style={{backgroundColor: "transparent"}}
                                    component={Link}
                                    to={"/"}
                                    onClick={() => props.setSelectedIndex(0)}>
                            <img src={backArrow} alt={"Back to Service Page"}/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction={"column"} className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined}
                                    style={{fontSize: "3.5em"}}
                                    variant={"h3"}>
                            The Revolution
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item
                  container
                  className={classes.itemContainer}
                  style={{ marginBottom: matchesMD ? "15em" : 0, marginTop: matchesMD ? "5em" : "9em"}}
                  md>
                <Grid item md>
                    <img src={vision} alt={"binoculars and mountains"}
                            style={{maxHeight: matchesMD ? 400 : 1000, maxWidth: matchesMD ? 400: 1000, paddingLeft: matchesMD ? "2.5em" : undefined}} />
                </Grid>
                {/*---end of image ---*/}

                <Grid item container
                      justify={matchesMD ? "center" : undefined}
                      direction={"column"} md
                      align={"right"}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant={"h4"}>
                            Vision
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.paragraphContainer} align={matchesMD ? "center" : undefined} variant={"body1"} paragraph >
                            The rise of computers, and subsequently the Internet,
                            has completely altered every aspect of human life.
                            This has increased our comfort, broadened our
                            connections, and reshaped how we view the world
                        </Typography>
                        <Typography className={classes.paragraphContainer} align={matchesMD ? "center" : undefined} variant={"body1"} paragraph >
                            What once was confined to huge rooms and teams of
                            engineers now resides in every single one of our hands.
                            Harnessing this unlimited potential by using it to solve
                            problems and better lives is at the heart of everything we do
                        </Typography>
                        <Typography className={classes.paragraphContainer} align={matchesMD ? "center" : undefined} variant={"body1"} paragraph >
                            We want to help businesses capitalize on the latest and greatest technology.
                            The best way to predict the future is to be the one building it,
                            and we want to help guide the world into this next
                            chapter of technological expansion, exploration, and innovation
                        </Typography>
                        <Typography className={classes.paragraphContainer} align={matchesMD ? "center" : undefined} variant={"body1"} paragraph >
                            By holding ourselves to rigorous standards and pristine quality,
                            we can ensure you have the absolute best tools necessary to thrive in this new frontier
                        </Typography>
                        <Typography className={classes.paragraphContainer} align={matchesMD ? "center" : undefined} variant={"body1"} paragraph >
                            We see a future where every individual has personalized software custom tailored
                            to their lifestyle, culture, and interests,
                            helping them overcome life’s obstacles. Each project is a step towards that goal.
                        </Typography>
                    </Grid>
                    {/*--end of body item--*/}
                </Grid>
            </Grid>
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
                            <Typography align={matchesMD ? "center" : undefined}
                                        variant={"h4"}
                                        style={{paddingBottom:".5em"}}>
                                Technology
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.paragraphContainer}
                                        align={matchesMD ? "center" : undefined}
                                        variant={"body1"} paragraph>
                                In 2013, Facebook invented a new way of building websites. This new system, React.js,
                                completely revolutionizes the process and practice of website development..
                            </Typography>
                            <Typography className={classes.paragraphContainer}
                                        align={matchesMD ? "center" : undefined}
                                        variant={"body1"} paragraph>
                                In 2013, Facebook invented a new way of building websites. This new system, React.js,
                                completely revolutionizes the process and practice of website developmentIn 2013,
                                Facebook invented a new way of building websites. This new system, React.js, completely
                                revolutionizes the process and practice of website development
                            </Typography>
                            <Typography className={classes.paragraphContainer}
                                        align={matchesMD ? "center" : undefined}
                                        variant={"body1"} paragraph>
                                Two years later they shocked the world by releasing a similar system,
                                React Native, for producing iOS and Android apps. Instead of
                                having to master two completely separate development platforms,
                                you can leverage the knowledge you already possessed from building
                                websites and reapply it directly! This was a huge leap forward.
                            </Typography>
                            <Typography className={classes.paragraphContainer}
                                        align={matchesMD ? "center" : undefined}
                                        variant={"body1"} paragraph>
                                This technology is now being used by companies like AirBnB, Microsoft,
                                Netflix, Pinterest, Skype, Tesla, UberEats, and when Facebook purchased
                                Instagram large portions of it were even rebuilt using React.
                            </Typography>
                            <Typography className={classes.paragraphContainer}
                                        align={matchesMD ? "center" : undefined}
                                        variant={"body1"} paragraph>
                                Developers have since built on top of these systems by automating
                                project setup and deployment, allowing creators to focus as much
                                as possible on their work itself.
                            </Typography>
                            <Typography className={classes.paragraphContainer}
                                        align={matchesMD ? "center" : undefined}
                                        variant={"body1"} paragraph>
                                These technical advancements translate into savings by significantly reducing
                                the workload and streamlining the workflow for developing new pieces of
                                software, while also lowering the barrier to entry for mobile app development.
                            </Typography>
                            <Typography className={classes.paragraphContainer}
                                        align={matchesMD ? "center" : undefined}
                                        variant={"body1"} paragraph>
                                This puts personalization in your pocket — faster, better,
                                and more affordable than ever before the work.
                            </Typography>

                        </Grid>
                        {/*--end of body item--*/}
                    </Grid>
                    <Grid item md>
                        <Tooltip disableFocusListener title={"Technology Options Animation"}>
                            <Lottie options={technologyOptions}
                                    isStopped={true}
                                    style={{maxHeight: 430, maxWidth: 400,
                                        paddingTop: matchesSM ? "3em" : "10em" }} />
                        </Tooltip>
                    </Grid>
                    {/*---end of image ---*/}
                </Grid>
            </Grid>
                {/*----end of item container----*/}

            <Grid item container direction={"row"}
                  justify={"center"}
                  className={classes.mainContainer}>
                <Grid item>
                    <Typography variant={"h4"} gutterBottom>Process</Typography>
                </Grid>
            </Grid>
            {/*---end of process title container----*/}
            <Grid item container direction={"row"}
                  justify={"center"}
                  className={classes.mainContainer}
                  style={{ backgroundColor: "#B3B3B3", height: "90em"}}>
                <Grid item container direction={"column"} style={{paddingTop:"10em"}} lg>
                    <Grid item>
                        <Typography variant={"h4"}  gutterBottom style={{color: "#000",paddingLeft:"3.45em"}}>Consultation</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                        paddingLeft:"5em"}}>
                            Our process begins the moment you realize you need a piece of technology
                            for your business. Whether you already have an idea for where to start and
                            what to do, or if you just know you want to step things up, our initial
                            consultation will help you examine your business holistically to find the best solutions.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                        paddingLeft:"5em"}}>
                            Detailed notes will be taken on your requirements and constraints,
                            while taking care to identify other potential areas for consideration.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                        paddingLeft:"5em"}}>
                            Cutting-edge advancements in machine learning like object detection
                            and natural language processing allow computers to do things previously
                            unimaginable, and our expertise and intuition will
                            help usher you into this new future of possibilities.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: "center"}}>
                    <img src={consultation} alt={"handshake"}/>
                </Grid>
            </Grid>
            {/*--end of consultation container--*/}
            <Grid item container direction={"row"}
                  justify={"center"}
                  className={classes.mainContainer}
                  style={{ backgroundColor: "#FD7373", height: "90em"}}>
                <Grid item container direction={"column"} style={{paddingTop:"10em"}} lg>
                    <Grid item>
                        <Typography variant={"h4"}
                                    gutterBottom style={{color: "#000",paddingLeft:"3.45em"}}>
                            Mockup
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            After we settle on the best path forward and decide on a solution to pursue,
                            details like the cost and timeline will be finalized.

                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            Then it’s time for us to start on your minimum viable product.
                            That’s just a fancy term for a mockup, which doesn’t include colors,
                            images, or any other polished design elements, but captures the essential
                            layout structure and functionality.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            This helps us understand and refine the solution
                            itself before getting distracted by specifics and looks.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: "center"}}>
                    <img src={mockupicon} alt={"computer screen"}/>
                </Grid>
            </Grid>
            {/*--end of mockup container--*/}
            <Grid item container direction={"row"}
                  justify={"center"}
                  className={classes.mainContainer}
                  style={{ backgroundColor: "#39B54A", height: "90em"}}>
                <Grid item container direction={"column"} style={{paddingTop:"10em"}} lg>
                    <Grid item>
                        <Typography variant={"h4"}
                                    gutterBottom style={{color: "#000",paddingLeft:"3.45em"}}>
                            Review
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            Before moving any farther we come back to you with our progress.
                            This gives you the freedom to discuss any changes you may want or any
                            ideas you may have come up with before any heavy lifting has been done.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            We give you an interactive demonstration of the mockups, thoroughly
                            explaining the thought process that went into each screen and every anticipated feature.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            Once you’re completely satisfied with the vision for our
                            solution we get down to the nitty gritty, fine-details of design.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: "center"}}>
                    <img src={reviewicon} alt={"big-magnifying-glass"}/>
                </Grid>
            </Grid>
            {/*--end of Review container--*/}
            <Grid item container direction={"row"}
                  justify={"center"}
                  className={classes.mainContainer}
                  style={{ backgroundColor: "#A67C52", height: "90em"}}>
                <Grid item container direction={"column"} style={{paddingTop:"10em"}} lg>
                    <Grid item>
                        <Typography variant={"h4"}
                                    gutterBottom style={{color: "#000",paddingLeft:"3.45em"}}>
                            Design
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            Using the mockups and notes taken during the consultation as guides,
                            we will start ironing out what the final product will look like.
                            This also involves using any brand material like fonts, colors, and
                            logos to extend the experience you’re already familiar with.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            No aspect is superfluous, and care will be taken with every decision.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: "center"}}>
                    <img src={designicon} alt={"big-paint-brush"}/>
                </Grid>
            </Grid>
            {/*--end of Design container--*/}
            <Grid item container direction={"row"}
                  justify={"center"}
                  className={classes.mainContainer}
                  style={{ backgroundColor: "#39B54A", height: "90em"}}>
                <Grid item container direction={"column"} style={{paddingTop:"10em"}} lg>
                    <Grid item>
                        <Typography variant={"h4"}
                                    gutterBottom style={{color: "#000",paddingLeft:"3.45em"}}>
                            Review
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            A second round of review is essential to our goal of
                            creating exactly what you want, exactly how you want it.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            This time we’ll be going over the finalized designs in another fully
                            interactive demonstration. Again this gives you an opportunity to tweak
                            things and make sure we get everything right the first time.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: "center"}}>
                    <img src={reviewicon} alt={"big-magnifying-glass"}/>
                </Grid>
            </Grid>
            {/*--end of Review container--*/}
            <Grid item container direction={"row"}
                  justify={"center"}
                  className={classes.mainContainer}
                  style={{ backgroundColor: "#FBB03B", height: "90em"}}>
                <Grid item container direction={"column"} style={{paddingTop:"10em"}} lg>
                    <Grid item>
                        <Typography variant={"h4"}
                                    gutterBottom style={{color: "#000",paddingLeft:"3.45em"}}>
                            Build
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            Here’s where we get down to business.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            Engineering begins after your approval on the final designs.
                            We start by scaffolding out the project on a high level, prioritizing
                            some areas over others.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            Each area is then developed in order of importance until ready to
                            be connected to the next piece.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            Typically the backend, behind the scenes operations are completed first.
                            Once all the services are in place we can then create the
                            front end, user side of things.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            Finishing the application doesn’t mean we’re done though, because we
                            use extensive testing to guarantee compatibility with all intended devices.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            Only after our rigorous examinations will we accept a product as finished,
                            then pushing it through the production pipeline. This produces an optimized,
                            compressed, consumer version of the code and assets ready for deployment.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: "center"}}>
                    <img src={buildicon} alt={"crane-and-building"}/>
                </Grid>
            </Grid>
            {/*--end of Build container--*/}
            <Grid item container direction={"row"}
                  justify={"center"}
                  className={classes.mainContainer}
                  style={{ backgroundColor: "#C1272D", height: "90em"}}>
                <Grid item container direction={"column"} style={{paddingTop:"10em"}} lg>
                    <Grid item>
                        <Typography variant={"h4"}
                                    gutterBottom style={{color: "#000",paddingLeft:"3.45em"}}>
                            Launch
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            The moment we’ve all been waiting for.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            When construction comes to a close you’re the first one to know.
                            We’ll give our final demonstration to show off your shiny new software in
                            the wild so you know exactly how it will look to your users.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            When you say the word, we press the button and launch your project out to
                            the public. We’re there to ensure everything goes to plan so you can start
                            reaping the rewards of your technological investment immediately.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: "center"}}>
                    <img src={launchicon} alt={"giant-rocket-ship   "}/>
                </Grid>
            </Grid>
            {/*--end of Launch container--*/}
            <Grid item container direction={"row"}
                  justify={"center"}
                  className={classes.mainContainer}
                  style={{ backgroundColor: "#8E45CE", height: "90em"}}>
                <Grid item container direction={"column"} style={{paddingTop:"10em"}} lg>
                    <Grid item>
                        <Typography variant={"h4"}
                                    gutterBottom style={{color: "#000",paddingLeft:"3.45em"}}>
                            Maintain
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            Our work doesn’t end there.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            After a successful launch we keep in close contact to
                            listen to feedback and hear how the project is being received.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            From there on out we make sure your application is kept up
                            to date and taking advantage of the best features and practices available.
                            When new developments arise or new techniques are discovered in future projects,
                            we will implement those advancements in your project as part of our routine maintenance.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: "center"}}>
                    <img src={maintainIcon} alt={"wrench-and-nuts"}/>
                </Grid>
            </Grid>
            {/*--end of Maintain container--*/}
            <Grid item container direction={"row"}
                  justify={"center"}
                  className={classes.mainContainer}
                  style={{ backgroundColor: "#29ABE2", height: "90em"}}>
                <Grid item container direction={"column"} style={{paddingTop:"10em"}} lg>
                    <Grid item>
                        <Typography variant={"h4"}
                                    gutterBottom style={{color: "#000",paddingLeft:"3.45em"}}>
                            Iteration
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            The cycle repeats whenever you come up with a new idea for extending your
                            current project, or come up with a brand new system entirely.

                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            By planning for future features and changes we can build and evolve
                            your application over time. As new use cases and customer needs develop
                            we can respond with continuous integration of new content.
                        </Typography>
                        <Typography variant={"body1"} paragraph style={{color: "#fff", maxWidth: "20em",
                            paddingLeft:"5em"}}>
                            Our iterative process will keep you current and competitive,
                            allowing you to quickly implement changes instead of waiting
                            months for a single update.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{ alignSelf: "center"}}>
                    <img src={iterateIcon} alt={"dominos"}/>
                </Grid>
            </Grid>
            {/*--end of Iterate container--*/}

            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
            {/*---end of call to action footer-----*/}
        </Grid>

    );

}
