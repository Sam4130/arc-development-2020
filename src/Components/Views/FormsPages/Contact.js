import React,{useState} from 'react';
import axios from 'axios';
import {makeStyles, useTheme} from "@material-ui/styles";
import{Link} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ButtonArrow from "../../UI/ButtonArrow";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";


//core compoents

//images
import background from '../../../assets/background.jpg';
import phoneIcon from '../../../assets/phone.svg';
import emailIcon from '../../../assets/email.svg';
import airplane from '../../../assets/send.svg';




const useStyles = makeStyles(theme =>({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom:"10em"
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
    message:{
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop:'5em',
        borderRadius:  5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }
    })
);


export default function Contact(props) {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    //form validation
    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const[emailHelper, setEmailHelper] = useState();

    const [phone, setPhone] = useState('');
    const[phoneHelper, setPhoneHelper] = useState();

    const [message, setMessage] = useState('');

    // dialog actions
    const [open, setOpen] = useState(false);

    // progess bar
    const[loading, setLoading] = useState(false);

    const [alert, setAlert] = useState({ open: false, message: "", backgroundColor: ""} )

    //handles form input validation
    const onChange = event => {
        let valid;

        switch (event.target.id) {
            //ids are related to each field previously specified
            case 'email':
                setEmail(event.target.value)
                //regex text
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                //handles email validation
                if(!valid) {
                    setEmailHelper("invalid email")
                } else {
                    setEmailHelper("")
                }
                break;
            case 'phone':
                setPhone(event.target.value);
                //regex
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
                //handles phone validation
                if(!valid) {
                    setPhoneHelper( "invalid phone number")

                } else {
                    setPhoneHelper("")
                }
                break;

            default:
                break;

        }
    };
    const onConfirm = () => {
        setLoading(true);
        axios
            .get(
                'https://us-central1-arc-development-material-ui.cloudfunctions.net/sendMail',
                {params: {
                        name: name,
                        message: message,
                        email: email,
                        phone: phone,


                    }}
            )
            .then(res => {
                setLoading(false)
                setOpen(false)
                setName("")
                setEmail("")
                setPhone("")
                setMessage("")
                setAlert({open: true, message:"Message sent successfully",
                backgroundColor: "#4BB543"})

            })
            .catch(err => {setLoading(false);
                            setAlert({open: true,
                            message:"Somthing went wrong, please try again!",
                                backgroundColor:"#FF3232"})});
    };

    //button contents
    const buttonContent = (
        <React.Fragment>
            Send Message
            <img src={airplane}
                 alt={"paper airplane"}
                 style={{marginLeft: '1em'}}
            />
        </React.Fragment>
    )
    return(
        <Grid container direction={"row"} style={{paddingBottom:"1em"}}>
            <Grid item container direction={"column"}
                  justify={"center"}
                  alignItems={"center"}
                  lg={4}
                  xl={3}>
                <Grid item>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Typography variant={"h2"} style={{ lineHeight: 1 }}>
                                Contact Us
                            </Typography>
                            <Typography variant={"body1"} style={{color: theme.palette.common.blue}}>
                                We're Waiting!!
                            </Typography>
                        </Grid>
                        <Grid item container style={{marginTop:"2em"}}>
                            <Grid item>
                                <img src={phoneIcon} alt={"phone"} style={{ marginRight: "0.5em" }}/>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body1"}
                                            style={{color: theme.palette.common.blue }}>
                                    <a style={{textDecoration: "none", color:"inherit"}}
                                       href={"tel:5555555555"}>(555)-555-5555</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{marginTop:"1em"}}>
                            <Grid item>
                                <img src={emailIcon} alt={"envelope"}
                                     style={{ marginRight: "0.5em", verticalAlign:"bottom" }}/>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body1"}
                                            style={{color: theme.palette.common.blue, fontSize:"1rem" }}>
                                    <a style={{textDecoration: "none", color:"inherit"}}
                                       href={"mailto:sweetApp@gmail.com"}>sweetApps@gmail.com</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{maxWidth:"20em"}}>
                            <Grid item style={{marginBottom:"0.5em"}}>
                                <TextField
                                    label={"Name"}
                                    id={"name"}
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)}/>
                            </Grid>
                            <Grid item style={{marginBottom:"0.5em"}}>
                                <TextField label={"Email"}
                                           error={emailHelper}
                                           helperText={emailHelper}
                                           id={"email"}
                                           fullWidth
                                           value={email}
                                           onChange={onChange}/>
                            </Grid>
                            <Grid item style={{marginBottom:"0.5em"}}>
                                <TextField label={"Phone"}
                                           id={"phone"}
                                           error={phoneHelper}
                                           helperText={phoneHelper}
                                           value={phone}
                                           onChange={onChange}/>
                            </Grid>
                        </Grid>
                        <Grid item style={{maxWidth:"20em"}}>
                            <TextField value={message}
                                       InputProps={{disableUnderline: true}}
                                       className={classes.message}
                                       multiline
                                       rows={10}
                                       id={"message"}
                                       onChange={(event) => setMessage(event.target.value) }/>

                        </Grid>
                        {/*----end of message item----*/}
                        <Grid item container jusify={"center"} style={{marginTop:"2em"}}>
                            <Button variant={"contained"}
                                    disabled={name.length === 0 ||
                                    message.length === 0 ||
                                    phone.length === 0 ||
                                    email.length === 0 ||
                                    emailHelper.length !== 0 ||
                                    phoneHelper.length !== 0 }
                                    className={classes.sendButton}
                                    onClick={() => setOpen(true)}>
                                {buttonContent}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            {/*-end of main item container-*/}
            </Grid>
            <Dialog open={open} onClose={() => setOpen(false)} PaperProps={{style: {maxWidth:"100em", padding:"5em"}}}>
                <DialogContent>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Typography variant={"h4"}>Confirm Message</Typography>
                        </Grid>
                        <Grid item>
                            <Grid item style={{marginBottom:"0.5em"}}>
                                <TextField
                                    label={"Name"}
                                    id={"name"}
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)}/>
                            </Grid>
                            <Grid item style={{marginBottom:"0.5em"}}>
                                <TextField label={"Email"}
                                           error={emailHelper}
                                           helperText={emailHelper}
                                           id={"email"}
                                           fullWidth
                                           value={email}
                                           onChange={onChange}/>
                            </Grid>
                            <Grid item style={{marginBottom:"0.5em"}}>
                                <TextField label={"Phone"}
                                           id={"phone"}
                                           error={phoneHelper}
                                           helperText={phoneHelper}
                                           value={phone}
                                           onChange={onChange}/>
                            </Grid>
                        </Grid>
                        <Grid item style={{maxWidth:"20em"}}>
                            <TextField value={message}
                                       InputProps={{disableUnderline: true}}
                                       className={classes.message}
                                       multiline
                                       rows={10}
                                       id={"message"}
                                       onChange={(event) => setMessage(event.target.value) }/>

                        </Grid>
                        {/*--end of message display item--*/}
                        <Grid item container justify={"center"} style={{paddingTop:"1em"}}>
                            <Button onClick={() => setOpen(false)} color={"primary"} >
                                Cancel
                            </Button>
                        </Grid>
                        {/*--end of cancel button--*/}
                        <Grid>
                            <Button variant={"contained"}
                                disabled={name.length === 0 ||
                                message.length === 0 ||
                                phone.length === 0 ||
                                email.length === 0 ||
                                emailHelper.length !== 0 ||
                                phoneHelper.length !== 0 }
                                className={classes.sendButton}
                                    onClick={onConfirm}>
                                {loading ? <CircularProgress size={30}/>  : buttonContent}
                            </Button>
                        </Grid>
                    {/*--end of submit button-*/}
                    </Grid>
                {/*--end of container---*/}
                </DialogContent>
            </Dialog>
            <Snackbar open={alert.open} message={alert.message}
                      ContentProps={{style: {backgroundColor: alert.backgroundColor}}}
                      anchorOrigin={{vertical: "top", horizontal:"center"}}
                      onClose={() => setAlert({...alert, open: false})}
                      autoHideDuration={4000}/>

            <Grid item
                  container
                  className={classes.background}
                  lg={8}
                  xl={9}
                  alignItems={"center"}>
                <Grid item
                      style={{ marginLeft: matchesSM ? 0 : "3em",
                          texAlign: matchesSM ? "center" : "inherit"}}>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Typography variant={"h2"}
                                        style={{textAlign: matchesSM ? "center" : undefined}}>
                                Simple Software <br /> Revolutionary
                                Results.</Typography>
                            <Typography variant={"subtitle2"} style={{ fontSize: '1.5em', textAlign: matchesSM ? "center" : undefined }}>
                                Take advantage of the 21st Century.
                            </Typography>
                        </Grid>
                        <Grid contianer justify={matchesSM ? "center" : undefined} item>
                            <Button component={Link} to={"/estimate"}
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
                    <Button component={Link} to={"/estimate"}
                            variant={"contained"} className={classes.estimateButton}
                            onClick={() => props.setValue(5)}>Free Estimate</Button>
                </Grid>
            </Grid>
        </Grid>
    );

}
