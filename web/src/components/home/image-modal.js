import { useState } from 'react';
import { Carousel} from 'react-bootstrap';

function ImageModal(props) {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        props.handleCarouselPointers(e)
        setIndex(selectedIndex)
    };
    return (
        <div role="dialog" aria-modal="true" className="fade modal-fullscreen modal show" tabIndex="-1" style={{display: 'block'}}>
            <div className="modal-dialog modal-fullscreen p-4">
                <div className="modal-content">
                    <div className="modal-header">
                        Image
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => props.toggleModal()}></button>
                    </div>
                    <div className="modal-body">
                        <Carousel activeIndex={index} onSelect={handleSelect} className='h-100' interval={null}>
                            <Carousel.Item>
                                <img className="img-responsive" src={props.imgUrl} alt={props.name} />
                                <Carousel.Caption>
                                    <p>{props.name}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageModal;