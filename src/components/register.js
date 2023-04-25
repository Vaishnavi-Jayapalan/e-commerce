import React from "react";
import { Link } from "react-router-dom";
import { EMAIL, PASSWORD, NAME, CONFIRM_PASSWORD } from "../shared/constants";

function RegisterComponent(props) {

    const isDisabled = () => {
        return props.state.errors.email ||
            props.state.errors.password ||
            props.state.errors.name ||
            props.state.errors.confirmPassword ||
            !props.state.email ||
            !props.state.password ||
            !props.state.name ||
            !props.state.confirmPassword
    }

    return (
        <div className="t-5">
            <div>
                <h1 className="text-center mt-5">E-Shopping</h1>
            </div>
            <div className="card card-0 mx-auto">
                <div className="card-body">
                    <h2 className="pb-3">Create an account</h2>
                    <form>
                        <div className="form-group mb-3">
                            <input type="text"
                                className={props.state.errors.name ? "form-control is-invalid" : "form-control"}
                                id="name"
                                placeholder="Enter name"
                                value={props.state.name}
                                onChange={(e) => props.handleOnChange(e, NAME)} 
                            />
                            {props.state.errors.name && 
                                <div className="invalid-feedback">
                                    Name should have minimum 3 characters
                                </div>
                            }
                        </div>
                        <div className="form-group mb-3">
                            <input type="email"
                                className={props.state.errors.email ? "form-control is-invalid" : "form-control"}
                                id="email"
                                placeholder="Enter email"
                                value={props.state.email}
                                onChange={(e) => props.handleOnChange(e, EMAIL)} 
                            />
                            {props.state.errors.email && 
                                <div className="invalid-feedback">
                                    Invalid Email
                                </div>
                            }
                        </div>
                        <div className="form-group mb-3">
                            <input type="password"
                                className={props.state.errors.password ? "form-control is-invalid" : "form-control"}
                                id="password"
                                placeholder="Password"
                                value={props.state.password}
                                onChange={(e) => props.handleOnChange(e, PASSWORD)} 
                            />
                            {props.state.errors.password && 
                                <div className="invalid-feedback">
                                    Password should contain more than 8 characters
                                </div>
                            }
                        </div>
                        <div className="form-group mb-3">
                            <input type="password"
                                className={props.state.errors.confirmPassword ? "form-control is-invalid" : "form-control"}
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                value={props.state.confirmPassword}
                                onChange={(e) => props.handleOnChange(e, CONFIRM_PASSWORD)} 
                            />
                            {props.state.errors.confirmPassword && 
                                <div className="invalid-feedback">
                                    Password doesn't match
                                </div>
                            }
                        </div>
                        <div className="mb-3">
                            <button type="submit"
                                className="btn btn-primary btn-block"
                                disabled = {isDisabled()}
                                onClick={()=> props.handleOnSubmit()}
                            >Save</button>
                        </div>
                        <div className="row mb-4">
                            <small className="font-weight-bold">Already have an account? <Link to='/login' className="text-primary">Sign in</Link></small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterComponent;