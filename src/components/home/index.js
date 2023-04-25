import React from "react";
import { Link } from "react-router-dom";

function HomeComponent(props) {
    return (
        <div className="row justify-content-center">
            <div className="card col-12 col-md-6 col-lg-4 md-pb">
                <div className="card-wrapper">
                    <div className="card-box align-left">
                        <h5 className="card-title mbr-fonts-style display-7"><strong>CRYPTO WALLETS</strong></h5>
                        <p className="card-text mbr-fonts-style display-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            eiusmod tempor incididunt.<br/></p>
                    </div>
                </div>
            </div>
            <div className="card col-12 col-md-6 col-lg-4 md-pb">
                <div className="card-wrapper">
                    <div className="card-box align-left">
                        <h5 className="card-title mbr-fonts-style display-7"><strong>MARGIN TRADE</strong></h5>
                        <p className="card-text mbr-fonts-style display-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </div>
            <div className="card col-12 col-md-6 col-lg-4 md-pb">
                <div className="card-wrapper">
                    <div className="card-box align-left">
                        <h5 className="card-title mbr-fonts-style display-7"><strong>CREATE CRYPTOCURRENCY</strong></h5>
                        <p className="card-text mbr-fonts-style display-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent;