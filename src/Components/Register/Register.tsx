import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from '../Forms.module.css'
import { registerRequest } from "../../Redux/Reducers/RegisterReducer";
import { Redirect, NavLink } from "react-router-dom";
import { validate } from "../utils/validate";
import { AppStateType } from "../../Redux/store";
import { errorAC } from "../../Redux/Reducers/BooleanReducer";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const loading = useSelector((store: AppStateType) => store.boolean.loading);
  const success = useSelector((store: AppStateType) => store.boolean.success);
  const error = useSelector((store: AppStateType) => store.boolean.error);
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
