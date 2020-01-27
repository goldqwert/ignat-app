import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from '../Forms.module.css'
import { registerRequest, errorAC } from "../../Redux/Reducers/RegisterReducer";
import { Redirect, NavLink } from "react-router-dom";
import { validate } from "../utils/validate";

interface IProps { }

const Register = (props: IProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const loading = useSelector((store: any) => store.register.loading);
  const success = useSelector((store: any) => store.register.success);
  const error = useSelector((store: any) => store.register.error);
  const dispatch = useDispatch();

  const sendRegisterData = () => {
    if (passwordRepeat !== password) {
      dispatch(errorAC(`Passwords don't match`))
    } else if (password.length <= 7) {
      dispatch(errorAC(`Password not valid! must be more than 7 characters...`))
    } else if (!validate(email)) {
      dispatch(errorAC(`Email is not valid`))
    } else {
      dispatch(registerRequest(email, password))
    }
  };

  if (success) {
    return <Redirect to="/login" />
  }

  return (
    <div className={s.wrapper}>
      <p>Register</p>
      <div>{loading ? <span>Loading...</span> : error ? <span className={s.error}>{error}</span> : success ? <span className={s.success}>Success!</span> : ''}</div>
      <input type="text" placeholder="email" onChange={(e) => setEmail(e.currentTarget.value)} />
      <input type="password" placeholder="password" onChange={(e) => setPassword(e.currentTarget.value)} />
      <input type="password" placeholder="repeat password" onChange={(e) => setPasswordRepeat(e.currentTarget.value)} />
      <button onClick={sendRegisterData} disabled={loading || success}>Register</button>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Register;
