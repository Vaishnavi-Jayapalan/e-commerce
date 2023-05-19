import React from "react";
import {connect} from "react-redux"
import RegisterComponent from "../components/register"
import { CONFIRM_PASSWORD } from "../shared/constants";
import { validateForm } from "../shared/validation/form.validation";
import { bindActionCreators } from "redux";
import { registerUserAction, resetRegUserAction } from "../store/actions/user.action";

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
            },
            error: null
        }
    }

    componentDidUpdate(nextProps) {
        if (this.props.userState.isSuccess && !nextProps.userState.isSuccess) {
            this.props.history.navigate('/home')
            this.props.resetRegUserAction()
        }

        if (this.props.userState.isError && !nextProps.userState.isError) {
            this.setState({
                error: this.props.userState.errors
            })
        }
    }

    handleOnChange = (e, type) => {
        let err = this.state.errors
        if (type === CONFIRM_PASSWORD) {
            err = {...err, [CONFIRM_PASSWORD]: e.target.value !== this.state.password}
            this.setState({ [type]: e.target.value, errors: err, error: null})
        } else {
            this.setState({ [type]: e.target.value, errors: validateForm(err, e.target.value, type), error: null })
        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: this.state.name, 
            email: this.state.email,
            password: this.state.password
        }
        this.props.registerUserAction(data)
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

const mapStateToProps = (state) => {
    return {
        userState: state.registerReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUserAction: bindActionCreators(registerUserAction, dispatch),
        resetRegUserAction: bindActionCreators(resetRegUserAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);