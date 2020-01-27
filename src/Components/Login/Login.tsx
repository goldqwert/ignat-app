import React, { useState } from "react";
import s from "../Forms.module.css";
import { NavLink, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, errorAC } from "../../Redux/Reducers/LoginReducer";
import { validate } from "../utils/validate";

const Login: React.FC = () => {

    const [email, setLoginState] = useState("")
    const [password, setPasswordState] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const error = useSelector((store: any) => store.login.error);
    const isAuth = useSelector((store: any) => store.profile.isAuth);
    const success = useSelector((store: any) => store.login.success);
    const loading = useSelector((store: any) => store.login.loading);

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
    };

    if (!isAuth) {
        return <Redirect to="/profile" />
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