import React, { useState, useEffect } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";

// logo
import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

// styles section
const useStyles = makeStyles(theme => ({
     toolbarMargin: {
         ...theme.mixins.toolbar,
         marginBottom:"3em",
         [theme.breakpoints.down('md')] : {
             marginBottom:"2em"
         },
         [theme.breakpoints.down('xs')]: {
             marginBottom: "1.25em"
         }
     },
    logo:{
         height:"8em",
        [theme.breakpoints.down('md')] : {
             height:"7em"
        },
        [theme.breakpoints.down('xs')]: {
             height: "5.5em"
        }
    },
    logoContainer: {
      padding: 0,
        "&:hover":{
          backgroundColor: "transparent"
        }
    },
    tabContainer: {
         marginLeft: 'auto'
    },
    tab: {
       ...theme.typography.tab,
        minWidth: 10,
        marginLeft:"25px"
    },
    button: {
         ...theme.typography.estimate,
         borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height:"45px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    menu:{
         backgroundColor: theme.palette.common.blue,
        color:"white",
        borderRadius: "0px"
    },
    menuItem:{
         ...theme.typography.tab,
        opacity: .7,
        "&:hover":{
             opacity: 1
        },
    },
    drawerIconContainer:{
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        height: "50px"
    },
    drawer: {
         backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
         ...theme.typography.tab,
        color: "white",
        opacity: 0.7

    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected:{
         "& .MuiListItemText-root":{
             opacity: 1
         }
    },
    appbar: {
         zIndex: theme.zIndex.modal + 1
    }
    })
);

export default function Headers(props) {
    const classes = useStyles();
    //handles changes to tabs
    const handelChange = (e, newValue) => {
        props.setValue(newValue)
    };
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    //inital settings for service sub menu
    const [openDrawer, setOpenDrawer] = useState(false);
    const[anchorEl, setAnchorEl] = useState(null);
    const[openMenu, setOpenMenu] = useState(false);


    // click event on service tab
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    };
    const handleMenuItemClick = (e, i) => {
      setAnchorEl(null);
      setOpenMenu(false);
      props.setSelectedIndex(i);
    };
    // close service menu
    const handleClose = (e) => {
        setAnchorEl(null)
        setOpenMenu(false)
    }
    //services drop menu routes, links, indexs
    const menuOptions = [
        {name:"Services", link:"/services", activeIndex: 1, selectedIndex: 0},
        {name:"Custom Software Development", link:"/custom-software",activeIndex: 1, selectedIndex: 1},
        {name:"iOS/Android App Development", link:"/mobile-apps",activeIndex: 1, selectedIndex: 2},
        {name:"Website Development", link:"/websites", activeIndex: 1, selectedIndex: 3},
        {name:"Security Testing", link:"/security",activeIndex: 1, selectedIndex: 4},]
    ;

    // routes for main menu items
    const routes = [
        {name: "Home", link:"/", activeIndex: 0},
        {name: "Services", link:"/services",activeIndex: 1,
            ariaOwns: anchorEl ? "simple-menu" : undefined,
            ariaPopup:anchorEl ? "true": undefined, mouseOver:(event) => handleClick(event)},
        {name: "Revolution", link:"/revolution",activeIndex: 2},
        {name: "About Us", link:"/about",activeIndex: 3},
        {name: "Contact Us", link:"/contact",activeIndex: 4},
        ];

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case`${route.link}`:
                    if(props.value !== route.activeIndex){
                        props.setValue(route.activeIndex)
                        if(route.selectedIndex && route.selectedIndex !== props.selectedIndex){
                            props.setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                case '/estimate':
                    props.setValue(5);
                    break;
                default:
                    break;
            }
        });
    }, // depencenceis for selection and routes
        [props.value, menuOptions, props.selectedIndex, routes, props]);

    const tabs = (
        <React.Fragment>
            <Tabs value={props.value}
                  onChange={handelChange}
                  className={classes.tabContainer}
                  indicatorColor={"primary"}>
                { //injection helps iterate over the various menu tabs
                    routes.map((route, index) => (
                    <Tab classNam={classes.tab} component={Link} to={route.link}
                    label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup}
                    onMouseOver={route.mouseOver} />
                )) // end of map
                }
            </Tabs>
            <Button variant={"contained"}
                    color={"secondary"}
                    component={Link} to={"/estimates"}
                    onClick={() => props.setValue(5)}
                    className={classes.button}>Free Estimate
            </Button>
            <Menu id={"simple-menu"}
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  style={{zIndex: 1302}}
                  MenuListProps={{onMouseLeave: handleClose}}
                  classes={{paper: classes.menu}}
                  elevation={0}
            >
                {menuOptions.map((option, i) => (
                    <MenuItem key={`${option}`}
                              component={Link}
                              to={option.link}
                              classes={{root: classes.menuItem}}
                              onClick={(event) => {handleMenuItemClick(event, i);props.setValue(1);
                                  handleClose()}}
                              selected={ i === props.selectedIndex && props.value === 1}>
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>

        </React.Fragment>
    );

    // mobile menu
    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS}
                             disableDiscovery={iOS}
                            open={openDrawer} onClose={() => setOpenDrawer(false)}
                            onOpen={() => setOpenDrawer(true)}
                             classes={{paper: classes.drawer}}
            >
                <div className={classes.toolbarMargin}/>
              <List disablePadding>
                  {// sets list items for drawer/tablet menu
                      routes.map(route => (
                      <ListItem divider button component={Link} to={route.link}
                                selected={props.value === route.activeIndex}
                                classes={{selected: classes.drawerItemSelected}}
                          onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex)}}>
                         <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
                      </ListItem>
                  )) // end of map
                  }
                  <ListItem
                      className={{root: classes.drawerItemEstimate,
                          selected: classes.drawerItemSelected, }}
                      onClick={() => {setOpenDrawer(false); props.setValue(5)}}
                      divider
                      button
                      component={Link} to={"/estimate"}
                      selected={props.value === 5}>
                      <ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                  </ListItem>
              </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer}
                        onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
        <ElevationScroll>
        <AppBar position={"fixed"} className={classes.appbar}>
            <Toolbar disableGutters>
                <Button component={Link} to={"/"}
                        onClick={() => props.setValue(0)}
                        disableRipple
                        className={classes.logoContainer}
                >
                    <img alt={"company-log"} src={logo} className={classes.logo} />
                </Button>
                {matches ? drawer : tabs}
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
    </React.Fragment>
    );
}

