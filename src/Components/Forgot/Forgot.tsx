import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "../Forms.module.css"
import { validate } from "../utils/validate";
import { useDispatch, useSelector } from "react-redux";
import { errorAC, forgot } from "../../Redux/Reducers/ForgotReducer";

interface IProps {

}

const Forgot = (props: IProps) => {

    const [email, setEmail] = useState("")
    const error = useSelector((store: any) => store.forgot.error);
    const success = useSelector((store: any) => store.forgot.success);
    const loading = useSelector((store: any) => store.forgot.loading);
    const dispatch = useDispatch()

    const sendForgotData = () => {
        debugger
        if (!validate(email)) {
            dispatch(errorAC(`Email is not valid!`))
        } else if (!success) {
            dispatch(errorAC(`Sorry, I can't send new password on your email`))
        } else {
            dispatch(forgot(email))
        }
    };

    return (
        <div className={s.wrapper}>
            <span>Forgot password</span>
            <div>{error ? <span className={s.error}>{error}</span> : ''}</div>
            <input onChange={(e) => setEmail(e.currentTarget.value)} type="email" placeholder="email" />
            <button onClick={sendForgotData} disabled={success || loading}>Send email</button>
            <NavLink to="/login">Login</NavLink>
        </div>
    )

};

export default Forgot