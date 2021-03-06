import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./Login.css";


const Login = () => {
    const { loginUser, isServerError } = useContext(AuthContext);
    const defaultValues = { email: "", password: "" };
    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
        defaultValues,
        loginUser
    );

    useEffect(() => {
        if (isServerError) {
            reset();
        }
    }, [isServerError]);

    return (
        <div className="login">

            <form className="login__form" onSubmit={handleSubmit}>
                <label>
                    Email:{" "}
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Password:{" "}
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </label>
                {isServerError ? (
                    <p className="login__error">Login failed, incorrect credentials!</p>
                ) : null}
                <Link to="/register">Click to register!</Link>
                <button className="login__button">Login!</button>
            </form>
            
        </div>
    );
};


export default Login;
