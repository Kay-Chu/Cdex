import React from "react";
import ProgressBar from "./progress";
import { Card } from "./card";
import { Grid } from '@mui/material';

const Home = () => {

    const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad','','',''];

    return (
        <div className="home">
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Card />
            </Grid>
            <Grid item xs={12} md={12}>
                <ProgressBar steps={steps} />
            </Grid>
        </Grid>
        </div>
    );
};

export { Home };