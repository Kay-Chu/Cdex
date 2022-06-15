import '../../style/modules/welcome.css'
import React from "react";
import { Typography , Grid} from '@mui/material';
import loading from '../../images/loading.gif'

const Welcome = () => {
    return (
        
        <div className="welcome">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography align="center" className="welcome-text" >Welcome!</Typography>
                </Grid>
                <Grid item xs={5.5}>
                </Grid>
                <Grid item xs={1}>
                    <img src={ loading } alt="loading" className="loading-gif" width="100px" height="100px"/>
                </Grid>
                <Grid item xs={5.5}>
                </Grid>
            </Grid>
        </div>
    );
};

export { Welcome };