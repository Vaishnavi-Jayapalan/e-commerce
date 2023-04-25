import React from "react";
import {connect} from "react-redux"
import RegisterComponent from "../components/register"
import { CONFIRM_PASSWORD } from "../shared/constants";
import { validateForm } from "../shared/validation/form.validation";

class RegisterContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {
                email: null,
                password: null,
                name: null, 
                confirmPassword: null
            }
        }
    }

    handleOnChange = (e, type) => {
        let err = this.state.errors
        if (type === CONFIRM_PASSWORD) {
            err = {...err, [CONFIRM_PASSWORD]: e.target.value !== this.state.password}
            this.setState({ [type]: e.target.value, errors: err})
        } else {
            this.setState({ [type]: e.target.value, errors: validateForm(err, e.target.value, type) })
        }
    }

    handleOnSubmit = () => {
        this.props.history.navigate('/home')
    }

    render() {
        return (            
            <RegisterComponent
                state = {this.state}
                handleOnChange = {this.handleOnChange}
                handleOnSubmit = {this.handleOnSubmit}
            />
        )
    }
}

export default connect()(RegisterContainer);