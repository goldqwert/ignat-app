import React, { useState } from 'react';
import Modal from '../Modal';

const SimpleModal: React.FC = () => {

    const [show, setShow] = useState(false)

    const openModal = () => { setShow(true) }
    const closeModal = () => { setShow(false) }

    return (
        <div>
            <Modal show={show} closeModal={closeModal}>
                Simple Modal
                    <button onClick={closeModal}>close</button>
            </Modal>
            <button onClick={openModal}>show simple modal</button>
        </div>)
};

export default SimpleModal;