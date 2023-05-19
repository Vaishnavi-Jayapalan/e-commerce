import React from "react";
import {connect} from "react-redux"
import LoginComponent from "../components/login"
import { validateForm } from "../shared/validation/form.validation";
import { bindActionCreators } from "redux";
import { loginUserAction, resetLoginUserAction } from "../store/actions/user.action";

class LoginContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: {
                email: null,
                password: null
            },
            error: null
        }
    }

    componentDidUpdate(nextProps) {
        if (this.props.loginState.isSuccess && !nextProps.loginState.isSuccess) {
            this.props.history.navigate('/home')
            this.props.loginResetAction()
        }

        if (this.props.loginState.isError && !nextProps.loginState.isError) {
            this.setState({
                error: this.props.loginState.errors
            })
        }
    }

    handleOnChange = (e, type) => {
        this.setState({ [type]: e.target.value, errors: validateForm(this.state.errors, e.target.value, type), error: null})
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.loginResetAction()
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginAction(data)
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

const mapStateToProps = (state) => {
    return {
        loginState: state.loginReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: bindActionCreators(loginUserAction, dispatch),
        loginResetAction: bindActionCreators(resetLoginUserAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);