import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

export const withRouter = (Component) =>  {
    function WrapperComponent(props) {

        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                history={{ location, navigate, params }}
            />
        );
    }
    return WrapperComponent;
}