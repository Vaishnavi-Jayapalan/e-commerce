import React from "react";

function HomeComponent(props) {
    return (
        <div className="row justify-content-center" style={{"margin-top": '15%'}}>
            <div className="card col-12 col-md-6 col-lg-4 md-pb">
                <div className="card-wrapper">
                    <div className="card-box text-center cursor-pointer">
                        <h5 className="card-title mbr-fonts-style display-7"><strong>MY ORDERS</strong></h5>
                        <img src="images/order.png" alt="shopping_cart" class="img-med"></img>
                        <p className="card-text mbr-fonts-style display-7">Track your order status<br/></p>
                    </div>
                </div>
            </div>
            <div className="card col-12 col-md-6 col-lg-4 md-pb" onClick={() => props.handleShop()}>
                <div className="card-wrapper">
                    <div className="card-box text-center cursor-pointer">
                        <h5 className="card-title mbr-fonts-style display-7"><strong>SHOP NOW</strong></h5>
                        <img src="images/shop.jpg" alt="fashion" class="img-med"></img>
                        <p className="card-text mbr-fonts-style display-7">Select and wear to your liking</p>
                    </div>
                </div>
            </div>
            <div className="card col-12 col-md-6 col-lg-4 md-pb">
                <div className="card-wrapper">
                    <div className="card-box text-center cursor-pointer">
                        <h5 className="card-title mbr-fonts-style display-7"><strong>MY PROFILE</strong></h5>
                        <img src="images/profile.png" alt="profile" class="img-med"></img>
                        <p className="card-text mbr-fonts-style display-7">Edit your profile, modify address</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent;