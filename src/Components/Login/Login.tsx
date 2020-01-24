import React, { useState } from "react";
import s from '../Forms.module.css'
import { NavLink, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Reducers/LoginReducer";

const Login: React.FC = () => {

    let [email, setLoginState] = useState('')
    let [password, setPasswordState] = useState('')
    let [rememberMe, setRememberMe] = useState(false)
    let error = useSelector((store: any) => store.login.error);
    let isAuth = useSelector((store: any) => store.profile.isAuth);
    let isLoading = useSelector((store: any) => store.login.isLoading);

    let dispatch = useDispatch()

    let sendData = () =>
        dispatch(login(email, password, rememberMe))


    // if (success) {
    //     return <Redirect to={'/profile'} />
    // }


    return (
        <div className={s.wrapper}>
            <span>Login</span>
            <span className={s.error}>{error}</span>
            <input type="email" placeholder="email" onChange={(e) => setLoginState(e.currentTarget.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPasswordState(e.target.value)} />
            <NavLink to="/forgot">Forgot password?</NavLink>
            <div><input type="checkbox" placeholder={'Remember Me'} onChange={() => setRememberMe(!rememberMe)}
                checked={rememberMe} />Remember be</div>
            <button onClick={sendData} disabled={isLoading}>Login</button>
            <NavLink to="/register">Registration</NavLink>
        </div>
    );
}

export default Login