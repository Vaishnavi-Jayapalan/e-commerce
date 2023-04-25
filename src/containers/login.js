import React from "react";
import {connect} from "react-redux"
import LoginComponent from "../components/login"
import { validateForm } from "../shared/validation/form.validation";

class LoginContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: {
                email: null,
                password: null
            }
        }
    }

    handleOnChange = (e, type) => {
        this.setState({ [type]: e.target.value, errors: validateForm(this.state.errors, e.target.value, type) })
    }

    handleOnSubmit = () => {
        this.props.history.navigate('/home')
    }

    render() {
        return (            
            <LoginComponent
                {...this.props}
                state = {this.state}
                handleOnChange = {this.handleOnChange}
                handleOnSubmit = {this.handleOnSubmit}
            />
        )
    }
}

export default connect()(LoginContainer);