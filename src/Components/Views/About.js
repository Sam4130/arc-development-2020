import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


// core copmonets

import CallToAction from "../UI/CallToAction";

const useStyles = makeStyles(theme =>({ }) )


export default function SectionHero(props) {

    const classes = useStyles();// end of classes

    return(
        <Grid>
            <Typography variant={"h2"}>Hello From the About Page </Typography>

            <Grid>
                {/*---Call to Action Block-----*/}
                <CallToAction
                    setValue={props.setValue}/>
            </Grid>


        </Grid>

    );

}
