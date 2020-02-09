import React, { useState } from "react";
import s from "../Forms.module.css";
import { NavLink, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { errorAC } from "../../Redux/Reducers/BooleanReducer";
import { validate } from "../utils/validate";
import { AppStateType } from "../../Redux/store";
import { login } from "../../Redux/Reducers/LoginReducer";

const Login: React.FC = () => {
    const [email, setLoginState] = useState("")
    const [password, setPasswordState] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const error = useSelector((store: AppStateType) => store.boolean.error);
    const isAuth = useSelector((store: AppStateType) => store.boolean.isAuth);
    const success = useSelector((store: AppStateType) => store.boolean.success);
    const loading = useSelector((store: AppStateType) => store.boolean.loading);
    const dispatch = useDispatch()

    const sendLoginData = () => {
        if (!password) {
            dispatch(errorAC(`Passwords is nor valid!`))
        } else if (password.length <= 7) {
            dispatch(errorAC(`Password not valid! must be more than 7 characters...`))
        } else if (!validate(email)) {
            dispatch(errorAC(`Email is not valid`))
        } else {
            dispatch(login(email, password, rememberMe))
        }
        setTimeout(() => {
            dispatch(errorAC(''))
        }, 5000);
    };

    if (!isAuth) {
        return <Redirect to="/register" />
    }

    return (
        <div className={s.wrapper}>
            <span>Login</span>
            <div>{loading ? <span>Loading...</span> : error ? <span className={s.error}>{error}</span> : success ? <span className={s.success}>Success!</span> : ''}</div>
            <input type="email" placeholder="email" onChange={(e) => setLoginState(e.currentTarget.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPasswordState(e.currentTarget.value)} />
            <NavLink to="/forgot">Forgot password?</NavLink>
            <div><input type="checkbox" onChange={(e) => setRememberMe(e.currentTarget.checked)}
                checked={rememberMe} />Remember be</div>
            <button onClick={sendLoginData} disabled={loading}>Login</button>
            <NavLink to="/register">Registration</NavLink>
        </div>
    );
}

export default Login