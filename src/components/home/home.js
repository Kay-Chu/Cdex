import React from "react";
import ProgressBar from "./progress";
import { Card } from "./card";
import { Content } from "./content";
import { Grid } from '@mui/material';
import square from '../../images/square.png';

const Home = () => {

    const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad','','',''];

    const cards = [{
        "title": "Card 1",
        "description": "This is a card",
        "image": square
    },{
        "title": "Card 2",
        "description": "This is a card",
        "image": square
    },{
        "title": "Card 3",
        "description": "This is a card",
        "image": square
    },{
        "title": "Card 4",
        "description": "This is a card",
        "image": square
    },{
        "title": "Card 5",
        "description": "This is a card",
        "image": square
    },{
        "title": "Card 6",
        "description": "This is a card",
        "image": square
    }]

    const content = [{
        "title": "Title 1",
        "description": "Move your mouse to the picture and read the description."
    },{
        "title": "Title 2",
        "description": "Move your mouse to the picture and read the description."
    },{
        "title": "Title 3",
        "description": "Move your mouse to the picture and read the description."
    },{
        "title": "Title 4",
        "description": "Move your mouse to the picture and read the description."
    },{
        "title": "Title 5",
        "description": "Move your mouse to the picture and read the description."
    },{
        "title": "Title 6",
        "description": "Move your mouse to the picture and read the description."
    }]

    const [activeStep, setActiveStep] = React.useState(0);
    return (
        <div className="home">

        

        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <h1>Create a Character</h1>
            </Grid>
            <Grid item xs={12} md={12}>
                {
                    activeStep < steps.length 
                    ? 
                    <>
                        <Card title={cards[activeStep].title} description={cards[activeStep].description} image={cards[activeStep].image} />
                        <Content title={content[activeStep].title} description={content[activeStep].description}/>
                    </>
                    : 
                    
                    <Card title={"Completed!"} description={"You have completed all steps!"} image={square} />
                    
                }
            </Grid>
            <Grid item xs={12} md={12}>
                <ProgressBar steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
            </Grid>
        </Grid>
        </div>
    );
};

export { Home };