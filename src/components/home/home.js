import React from "react";
import ProgressBar from "./progress";
import { Card } from "./card";

const Home = () => {

    const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

    return (
        <div className="home">
            <Card />
            <ProgressBar steps={steps} />
        </div>
    );
};

export { Home };