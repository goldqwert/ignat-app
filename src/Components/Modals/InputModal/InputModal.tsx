import React, { useState } from 'react';
import Modal from '../Modal';

const InputModal: React.FC = () => {

    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("yura")
    const [password, setPassword] = useState("lol")
    const [repeatPassword, setRepeatPassword] = useState("12")
    const openModal = () => { setShow(true) }
    const closeModal = () => { setShow(false) }

    return (
        <div>
            <Modal show={show} closeModal={closeModal}>
                Input Modal
                <div>
                    <input value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} />
                    <input value={password} onChange={(e) => { setPassword(e.currentTarget.value) }} />
                    <input value={repeatPassword} onChange={(e) => { setRepeatPassword(e.currentTarget.value) }} />
                    <div><button onClick={closeModal}>Ok</button></div>
                </div>
            </Modal>
            <button onClick={openModal}>show input modal</button>{email} -- {password} -- {repeatPassword}
        </div>)
};

export default InputModal;