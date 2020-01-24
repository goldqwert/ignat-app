import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Forms.module.css"

interface IProps {

}

const Forgot = (props: IProps) => {
    return (
        <div className={s.wrapper}>
            <span>Forgot password</span>
            <input type="email" placeholder="email" />
            <button>Send email</button>
            <NavLink to="/login">Login</NavLink>
        </div>
    )

};

export default Forgot