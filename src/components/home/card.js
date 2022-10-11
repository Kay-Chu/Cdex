 import React from "react";

const Card = ({title, description, image}) => {

    return (
        <>
            <div className="container_card">
                <div className="card">
                    <div className="imgBx">
                        <img src={image} alt=""/>
                    </div>
                    <div className="content">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                
            </div>
            
        </>
    );
};

export { Card };