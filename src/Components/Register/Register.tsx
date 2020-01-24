import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from '../Forms.module.css'
import { registerRequest, errorRegisterRequest } from "../../Redux/Reducers/RegisterReducer";
import { Redirect, NavLink } from "react-router-dom";

interface IProps { }

const Register = (props: IProps) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const loading = useSelector((store: any) => store.register.loading);
  const redirect = useSelector((store: any) => store.register.redirect);
  const error = useSelector((store: any) => store.register.error);
  const dispatch = useDispatch();

  const sendRegisterData = () => {
    if (passwordRepeat !== password) {
      dispatch(errorRegisterRequest(`Passwords don't match`))
    } else if (password.length <= 7) {
      dispatch(errorRegisterRequest(`Password not valid! must be more than 7 characters...`))
    } else if (!validate(email)) {
      dispatch(errorRegisterRequest(`Email is not valid`))
    } else {
      dispatch(registerRequest(email, password))
    }
  };

  if (redirect) {
    return <Redirect to={"/login"} />;
  }

  const validate = (email: string) => {
    const regExp = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,7}$/i;
    return regExp.test(String(email).toLowerCase())
  };


  return (
    <div className={s.wrapper}>
      <span>Register</span>
      <div>{!loading ? <div className={s.error}>{error}</div> : (loading ? <div>Loading...</div> : null)}</div>
      <input type="text" placeholder="email" onChange={(e) => setEmail(e.currentTarget.value)} />
      <input type="password" placeholder="password" onChange={(e) => setPassword(e.currentTarget.value)} />
      <input type="password" placeholder="repeat password" onChange={(e) => setPasswordRepeat(e.currentTarget.value)} />
      <button onClick={sendRegisterData} disabled={loading}>Register</button>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Register;
