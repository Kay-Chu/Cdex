import React from "react";
import square from '../../images/square.png';

const Card = () => {

    return (
        <>
            <div className="container_card">
                <div className="card">
                    <div className="imgBx">
                        <img src={square} alt=""/>
                    </div>
                    <div className="content">
                        <h2>Card One</h2>
                        <p>This is a card.</p>
                    </div>
                </div>
                
            </div>
            
        </>
    );
};

export { Card };