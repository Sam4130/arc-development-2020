import React, {useState} from 'react';
import {cloneDeep} from 'lodash';
import {makeStyles, useTheme} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Lottie from 'react-lottie';

//animations
import estimateAnimation from '../../../animations/estimateAnimation/data';

//images
import send from '../../../assets/send.svg';
import software from '../../../assets/software.svg';
import mobile from '../../../assets/mobile.svg';
import website from '../../../assets/website.svg';
import backArrow from '../../../assets/backArrow.svg';
import forwardArrow from '../../../assets/forwardArrow.svg';
import backArrowDisabled from '../../../assets/backArrowDisabled.svg';
import forwardArrowDisabled from '../../../assets/forwardArrowDisabled.svg';
import camera from '../../../assets/camera.svg';
import upload from '../../../assets/upload.svg';
import person from '../../../assets/person.svg';
import persons from '../../../assets/persons.svg';
import people from '../../../assets/people.svg';
import info from '../../../assets/info.svg';
import bell from '../../../assets/bell.svg';
import users from '../../../assets/users.svg';
import iphone from '../../../assets/iphone.svg';
import gps from '../../../assets/gps.svg';
import customized from '../../../assets/customized.svg';
import data from '../../../assets/data.svg';
import android from '../../../assets/android.svg';
import globe from '../../../assets/globe.svg';
import biometrics from '../../../assets/biometrics.svg'
import animationData from "../../../animations/landinganimation/data";





// iteration over questions
const defaultQuestions = [{id: 1, title: "Which Service Are You Interested?", active: true,
    options:[
            {
            // custom software selection
            id: 1,
            title:"Custom Software Development",
            subtitle: null,
            icon: {software},
            iconAlt: "three floating screens",
            selected: false,
                cost:0,
            },
            {
                // ios/android development selection
                id: 2,
                title:"iOS/Android Development",
                subtitle: null,
                icon: {mobile},
                iconAlt: "mobile phones",
                selected: false,
                cost: 0
            },
            {
                // custom software selection
                id: 3,
                title:"Website Development",
                subtitle: null,
                icon: {website},
                iconAlt: "computer outline",
                selected: false,
                cost: 0
            },
            {
                // security
                id: 4,
                title:"Security Testing and Development",
                subtitle: null,
                icon: {mobile},
                iconAlt: "Security apps outline",
                selected: false,
                cost: 0
            }
        ]
    }
  ];



const softwareQuestions = [
    // set as false until user selects option
    // allows for multiple selction of services by users
    { ...defaultQuestions[0], active: false },
    {
        id: 2,
        title: "Which platforms do you need supported?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Web Application",
                subtitle: null,
                icon: website,
                iconAlt: "computer outline",
                selected: false,
                cost: 100
            },
            {
                id: 2,
                title: "iOS Application",
                subtitle: null,
                icon: iphone,
                iconAlt: "outline of iphone",
                selected: false,
                cost: 100
            },
            {
                id: 3,
                title: "Android Application",
                subtitle: null,
                icon: android,
                iconAlt: "outlines of android phone",
                selected: false,
                cost: 100
            }
        ],
        active: true
    },
    {
        id: 3,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Photo/Video",
                subtitle: null,
                icon: camera,
                iconAlt: "camera outline",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "GPS",
                subtitle: null,
                icon: gps,
                iconAlt: "gps pin",
                selected: false,
                cost: 25
            },
            {
                id: 3,
                title: "File Transfer",
                subtitle: null,
                icon: upload,
                iconAlt: "outline of cloud with arrow pointing up",
                selected: false,
                cost: 25
            }
        ],
        active: false
    },
    {
        id: 4,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Users/Authentication",
                subtitle: null,
                icon: users,
                iconAlt: "outline of a person with a plus sign",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "Biometrics",
                subtitle: null,
                icon: biometrics,
                iconAlt: "fingerprint",
                selected: false,
                cost: 25
            },
            {
                id: 3,
                title: "Push Notifications",
                subtitle: null,
                icon: bell,
                iconAlt: "outline of a bell",
                selected: false,
                cost: 25
            }
        ],
        active: false
    },
    {
        id: 5,
        title: "What type of custom features do you expect to need?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Low Complexity",
                subtitle: "(Informational)",
                icon: info,
                iconAlt: "'i' inside a circle",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "Medium Complexity",
                subtitle: "(Interactive, Customizable, Realtime)",
                icon: customized,
                iconAlt: "two toggle switches",
                selected: false,
                cost: 50
            },
            {
                id: 3,
                title: "High Complexity",
                subtitle: "(Data Modeling and Computation)",
                icon: data,
                iconAlt: "outline of line graph",
                selected: false,
                cost: 100
            }
        ],
        active: false
    },
    {
        id: 6,
        title: "How many users do you expect?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "0-10",
                subtitle: null,
                icon: person,
                iconAlt: "person outline",
                selected: false,
                cost: 1
            },
            {
                id: 2,
                title: "10-100",
                subtitle: null,
                icon: persons,
                iconAlt: "outline of two people",
                selected: false,
                cost: 1.25
            },
            {
                id: 3,
                title: "100+",
                subtitle: null,
                icon: people,
                iconAlt: "outline of three people",
                selected: false,
                cost: 1.5
            }
        ],
        active: false
    }
];


const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
        id: 2,
        title: "Which type of website are you wanting?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Basic",
                subtitle: "(Informational)",
                icon: info,
                iconAlt: "person outline",
                selected: false,
                cost: 100
            },
            {
                id: 2,
                title: "Interactive",
                subtitle: "(Users, API's, Messaging)",
                icon: customized,
                iconAlt: "outline of two people",
                selected: false,
                cost: 200
            },
            {
                id: 3,
                title: "E-Commerce",
                subtitle: "(Sales)",
                icon: globe,
                iconAlt: "outline of three people",
                selected: false,
                cost: 250
            }
        ],
        active: true
    }
];


const useStyles = makeStyles(theme =>({
    heading: {
        ...theme.typography.heading,
        paddingTop:"4em"
    },
    icon:{
        width:"14em",
        height: "10em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    animation: {
        marginLeft: "10%",
        marginTop:"7.5em"
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        backgroundColor: theme.palette.common.orange,
        height: 50,
        width: 225,
        fontSize: "1.25rem",
        marginTop: "5em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }

    })
);



export default function Estimate(props) {

    const classes = useStyles();// end of classes
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    // selected questions
    const[questions,setQuestions] = useState(defaultQuestions);

    // animations
    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: estimateAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },

    };

    const previousQuestion = () => {
        const newQuestions = cloneDeep(questions)
        const currentlyActive = newQuestions.filter(question => question.active);
        // what ever the active idea is minus one to deterimne which one is the next questions
        const activeIndex  = currentlyActive[0].id - 1;
        const nextIndex = activeIndex - 1;
        // new version of the array
        newQuestions[activeIndex] = {...currentlyActive[0], active: false};
        // renders the next set of questions on the page
        newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true};

        // create the new questions from previous state
        setQuestions(newQuestions)
    };
        // handles next questions selected by user
    const nextQuestion = () => {
        const newQuestions = cloneDeep(questions)
        const currentlyActive = newQuestions.filter(question => question.active);
        // what ever the active idea is minus one to deterimne which one is the next questions
        const activeIndex  = currentlyActive[0].id - 1;
        const nextIndex = activeIndex + 1;
        // new version of the array
        newQuestions[activeIndex] = {...currentlyActive[0], active: false};
        // renders the next set of questions on the page
        newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true};

        // create the new questions from previous state
        setQuestions(newQuestions)
    };

    // prevent going past the previous question selection
    const navigationPreviousDisabled = () => {
        const currentlyActive = questions.filter(question => question.active);

        if(currentlyActive[0].id === 1) {
            return true;
        } else{
            return false;
        }
    };
    // prevent going past the last question selection
    const navigationNextDisabled = () => {
        const currentlyActive = questions.filter(question => question.active);
        // checks if we are at the last questions
        if(currentlyActive[0].id === questions[questions.length -1 ].id) {
            return true;
        } else {
            return false;
        }
    };
    //handle the user selection of buttons for various services
    const handleSelect = (id) => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(question => question.active);
        // what ever the active idea is minus one to deterimne which one is the next questions
        const activeIndex  = currentlyActive[0].id - 1;

        //find the most recent selection
        const newSelected = newQuestions[activeIndex].options[id - 1];
        // returns the previous selected options from the user
        const previousSelected = currentlyActive[0].options.filter(option => option.selected)

        //handles the selected items
        switch(currentlyActive[0].subtitle) {
            case 'Select one.':
                if(previousSelected[0]) {
                    previousSelected[0].selected =!previousSelected[0].selected;
                }
                // toggle the selected item
                newSelected.selected = !newSelected.selected;
                break;
            default:
                    newSelected.selected = !newSelected.selected;
                    break;


        }
        // determine which catagorie of quetions based on the overarching question
       switch (newSelected.title) {
           case 'Custom Software Development' :
            setQuestions(softwareQuestions)
                break;
           case 'iOS/Android App Development' :
               setQuestions(softwareQuestions)
               break;
           case 'Website Development' :
               setQuestions(websiteQuestions)
               break;
           case 'Security Questions' :
               setQuestions(softwareQuestions)
               break;
           default:
               setQuestions(newQuestions);
       }
    };

    return(
       <Grid container direction={"row"} style={{paddingBottom:"10em"}} >
           <Grid item container direction={"column"} lg>
               <Grid item style={{marginTop:"2em",marginBottom:"5em"}}>
                   <Typography variant={"h2"} style={{marginBottom: "1em"}}>
                        Estimate
                   </Typography>
               </Grid>
               <Grid item style={{marginRight: "10em"}}>
                   <Lottie options={defaultOptions} height={"100%"} width={"100%"}/>
               </Grid>
           </Grid>

           <Grid item
                 container
                 alignItems={"center"}
                 direction={"column"}
                 lg
                style={{marginRight: "2em", marginBottom:"25em"}}>
               {/*--default questions to be selected--*/}
               {questions.filter(question => question.active).map((question, index) => (
                       <React.Fragment key={index}>
                           <Grid item>
                               <Typography
                                   variant={"h2"}
                                   align={"center"}
                                   style={{
                                       fontWeight:500,
                                       fontSize:"2.25rem",
                                       marginBottom:"2.5em",
                                       marginTop:"5em",
                                       lineHeight:1.25
                                   }}
                                   gutterBottom>
                                   {question.title}
                               </Typography>
                               <Typography variant={"body1"}
                                           align={"center"}
                                           style={{marginBottom:"2.5em"}}
                                           gutterBottom>
                                   {question.subtitle}
                               </Typography>
                           </Grid>
                           <Grid item container>
                               {question.options.map(option => (
                                   <Grid item
                                         container
                                         direction={"column"}
                                         md
                                         component={Button}
                                        style={{display: "grid", textTransform:"none",
                                            borderRadius: 0,
                                            backgroundColor: option.selected ? theme.palette.common.orange : null }}
                                   onClick={() => handleSelect(option.id)}>
                                       <Grid item style={{ maxWidth: "14em"}}>
                                           <Typography variant={"h6"}
                                                       align={"center"}
                                                       style={{ marginBottom:"1em"}}>
                                               {option.title}
                                           </Typography>
                                           <Typography variant={"caption"} align={"center"}>
                                               {option.subtitle}
                                           </Typography>
                                       </Grid>
                                       <Grid item>
                                           <img
                                               src={option.icon}
                                               alt={option.iconAlt}
                                               className={classes.icon} />
                                       </Grid>
                                   </Grid>
                               ))}
                           </Grid>
                       </React.Fragment>
                   )
               )}
               {/*---toggle arrows----*/}
               <Grid item container justify={"space-between"} style={{width:"18em", marginTop:"3em"}}>
                   <Grid item>
                       <IconButton disabled={navigationPreviousDisabled()}  onClick={previousQuestion}>
                           <img  src={ navigationPreviousDisabled() ? backArrowDisabled :
                               backArrow}
                                 alt={"Previous question"}/>
                       </IconButton>

                   </Grid>
                   <Grid item>
                       <IconButton disabled={navigationNextDisabled()}  onClick={nextQuestion}>
                           <img  src={ navigationNextDisabled() ? forwardArrowDisabled:
                               forwardArrow}  alt={"Next question"}/>
                       </IconButton>
                   </Grid>
                   </Grid>
               <Grid item>
                   <Button variant={"contained"} className={classes.estimateButton}>
                       Get Estimate
                   </Button>
               </Grid>
           </Grid>
       {/*---end of item container column---*/}
       </Grid>
    // end of main contianer
    );



}





// how to test your app for imutiable state
// const newQuestions = cloneDeep(defaultQuestions);
// newQuestions[0].options[0].selected = true;
// console.log(defaultQuestions[0].options[0]);
