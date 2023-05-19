import React from "react";
import { Link } from "react-router-dom";
import { EMAIL, PASSWORD } from "../shared/constants";

function LoginComponent(props) {
    return (
        <div className="t-5">
            <div>
                <h1 className="text-center mt-5">E-Shopping</h1>
            </div>
            <div className="card card-0 mx-auto">
                <div className="card-body">
                    <h2 className="pb-3">Login</h2>
                    <form>
                        <div className="form-group mb-3">
                            {props.state.error && 
                                <div style={{color: "red"}}>
                                    {props.state.error.message}
                                </div>
                            }
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
                        <div className="mb-3">
                            <button type="submit"
                                className="btn btn-primary btn-block"
                                disabled = {props.state.errors.email || props.state.errors.password || !props.state.email || !props.state.password || props.state.error?.message}
                                onClick={(e)=> props.handleOnSubmit(e)}
                            >Submit</button>
                        </div>
                        <div className="row mb-4">
                            <small className="font-weight-bold">Don't have an account? <Link to='/register' className="text-primary">Register</Link></small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;