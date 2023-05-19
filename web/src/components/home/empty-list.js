import React from "react";
import ToastComponent from "../toast";

function EmptyListComponent(props) {
    const fileInputRef = React.useRef(null);
    return (
        <>
        <div className="container-fluid mt-100" style={{width:'100%', height: '100%'}}>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header mt-100">
                            <h2>Photos</h2>
                        </div>
                        <div className="card-body cart">
                            <div className="col-sm-12 empty-cart-cls text-center">
                                <img src="images/images.png" width="30%" className="img-fluid mb-4 mr-3" alt="gallery-empty"/>
                                <h3><strong>Your Gallery is Empty</strong></h3>
                                <input type="file" ref={fileInputRef} style={{display: "none"}} onChange={(e) => props.handelOnChange(e)}/>
                                <button type="button" onClick={() => fileInputRef.current.click()} className="btn btn-primary cart-btn-transform m-3">Upload Photos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastComponent {...props.toastData} showToast={props.showToast} />
        </>

    );
} 

export default EmptyListComponent;