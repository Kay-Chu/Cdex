import React from "react";
import ProgressBar from "./progress";

const Home = () => {

    const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

    return (
        <>
            <ProgressBar steps={steps} />
        </>
    );
};

export { Home };