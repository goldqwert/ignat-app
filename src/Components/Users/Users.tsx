import React, { CSSProperties, useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersTC } from "../../Redux/Reducers/UsersReducer";
import { AppStateType } from '../../Redux/store';

const Users: any = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsersTC())
    }, [])

    const users = useSelector((store: any) => store.privateChat.users);

    let usersAll = users.map((u: any) => {
        return (
            <div>
                <div>u.email</div>
            </div>
        )
    })


};

export default Users;