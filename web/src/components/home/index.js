import React from "react";
import ToastComponent from "../toast";
import ImageModal from "./image-modal";

function HomeComponent(props) {
    const fileInputRef = React.useRef(null)

    return (
        <>
            <div className="container">
                <div className="d-flex pt-5 pb-5">
                    <h1 className="fw-light text-center text-lg-start mt-4 mb-0 col-lg-8">Photos Gallery</h1>
                    <input type="file" ref={fileInputRef} style={{display: "none"}} onChange={(e) => props.handelOnChange(e)}/>
                    <button type="button" onClick={() => fileInputRef.current.click()} className="btn btn-primary col-lg-3 mt-4">Upload Photos</button>
                </div>
                <div className="row text-center text-lg-start">
                    {props.state.list && props.state.list.map((data) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-6" key={data.id}>
                                <div className="d-block mb-4 h-100 cursor-pointer" onClick={() => props.handleImageModal(data)}>
                                    <img className="img-fluid img-thumbnail resize-img-thumbnail" itemProp="thumbnail" src={data.imgUrl} alt={data.name} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <ToastComponent {...props.state.toastData} showToast={props.state.showToast} />
            {props.state.showModal && 
                <ImageModal 
                    {...props.state.selectedImg} 
                    toggleModal = {props.toggleModal} 
                    showModal = {props.state.showModal} 
                    handleCarouselPointers = {props.handleCarouselPointers}
                />
            }
        </>
    )
}

export default HomeComponent;