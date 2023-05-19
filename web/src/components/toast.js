import Toast from "react-bootstrap/Toast";

function ToastComponent(props) {
    return (
        <Toast show={props.showToast} className={props.class}>
            <Toast.Header>
                <strong className="me-auto">{props.title}</strong>
            </Toast.Header>
            <Toast.Body>{props.message}</Toast.Body>
        </Toast>
    );
}

export default ToastComponent;