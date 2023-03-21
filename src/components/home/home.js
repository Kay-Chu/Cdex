import React from "react";
import ProgressBar from "./progress";
import { Card } from "./card";
import { Content } from "./content";
import { Grid } from '@mui/material';
import square from '../../images/square.png';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {


    const [card, setCard] = React.useState({});

    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/v2/search/title',
        params: {title: 'batman', country: 'us', type: 'movie', output_language: 'en'},
        headers: {
          'X-RapidAPI-Key': '23e7de4453mshb034b7870fedc6bp18739fjsn4e8925f0ee59',
          'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

    // function getMovie(search_title, country_code) {
    //         const options = {
    //             method: 'GET',
    //             url: 'https://streaming-availability.p.rapidapi.com/v2/search/title',
    //             params: {title: search_title, country: country_code, type: 'movie', output_language: 'en'},
    //             headers: {
    //                 'X-RapidAPI-Key': '23e7de4453mshb034b7870fedc6bp18739fjsn4e8925f0ee59',
    //                 'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    //             }
    //         };

    //         axios.request(options).then(function (response) {
    //             const movie = response.data.result[0];
    //             console.log("movie");
    //             setCard({
    //                 "title" : movie.title,
    //                 "description" : movie.overview;
    //                 "image" : movie.posterURLs['500']
    //             });
    //         }).catch(function (error) {
    //             console.error(error);
    //         });
    }

    // const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad','','',''];

    // const cards = [{
    //     "title": "Card 1",
    //     "description": "This is a card",
    //     "image": square
    // },{
    //     "title": "Card 2",
    //     "description": "This is a card",
    //     "image": square
    // },{
    //     "title": "Card 3",
    //     "description": "This is a card",
    //     "image": square
    // },{
    //     "title": "Card 4",
    //     "description": "This is a card",
    //     "image": square
    // },{
    //     "title": "Card 5",
    //     "description": "This is a card",
    //     "image": square
    // },{
    //     "title": "Card 6",
    //     "description": "This is a card",
    //     "image": square
    // }]

    // const content = [{
    //     "title": "Title 1",
    //     "description": "Move your mouse to the picture and read the description."
    // },{
    //     "title": "Title 2",
    //     "description": "Move your mouse to the picture and read the description."
    // },{
    //     "title": "Title 3",
    //     "description": "Move your mouse to the picture and read the description."
    // },{
    //     "title": "Title 4",
    //     "description": "Move your mouse to the picture and read the description."
    // },{
    //     "title": "Title 5",
    //     "description": "Move your mouse to the picture and read the description."
    // },{
    //     "title": "Title 6",
    //     "description": "Move your mouse to the picture and read the description."
    // }]

    // const [activeStep, setActiveStep] = React.useState(0);
    return (
        <div className="home">

            <div className="movie">
                {getMovie('batman','us')}
                {/* <h1> {card.title} </h1>
                <p> {card.description} </p> */}
                {/* {card.image} */}
                
            </div>

        {/* <Grid container spacing={2}>
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
        </Grid> */}
        </div>
    );
};

export { Home };