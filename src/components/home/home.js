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




    function getMovie(search_title, country_code) {
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
                const movie = response.data.result[0];
                console.log("movie");
                setCard({
                    "title" : movie.title,
                    "description" : movie.overview,
                    "image" : movie.posterURLs['500']
                });
            }).catch(function (error) {
                console.error(error);
            });
    }

    return (
        <div className="home">

            <div className="movie">
                <p>title : {card.title}</p>
                <p>overview : {card.description}</p>
                <p>{getMovie('batman','us')}</p>
                
            </div>

        </div>
    );
};

export { Home };