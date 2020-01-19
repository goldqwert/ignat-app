import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Register.module.css';
import { register } from '../../Redux/Reducers/RegisterReducer';
import { Redirect } from 'react-router-dom';

interface IProps {

}

const Register = (props: IProps) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const loading = useSelector((store: any) => store.register.loading)
    const redirect = useSelector((store: any) => store.register.redirect)

    const dispatch = useDispatch()

    const sendRegisterData = () => {
        debugger
        dispatch(register(email, password))
    }

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onChangePass = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    if (redirect) {
        return <Redirect from='/register' to='/login' />
    }

    return (
        <div className={s.wrapper}>
            <div>Register</div>
            <input value={email} onChange={onChangeEmail} required />
            <input type='password' value={password} onChange={onChangePass} required />
            <input type='password' value={password} required />
            <button onClick={sendRegisterData} disabled={loading}>Register</button>
            <a href='/login'>Sign In</a>
            {loading && <div>Loading...</div>}
        </div>)
};

export default Register;