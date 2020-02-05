import React, { useState } from 'react';
import Modal from '../Modal';

const QuestionModal: React.FC = () => {

    const [show, setShow] = useState(false)
    const [answer, setAnswer] = useState(false)
    const openModal = () => { setShow(true) }
    const closeModal = () => { setShow(false) }

    const closeModalAnswerYes = () => {
        setShow(false)
        setAnswer(true)
    }

    const closeModalAnswerNo = () => {
        setShow(false)
        setAnswer(false)
    }

    return (
        <div>
            <Modal show={show} closeModal={closeModal}>
                Question Modal
                <div>
                    <button onClick={closeModalAnswerYes}>Yes</button>
                    <button onClick={closeModalAnswerNo}>No</button>
                </div>
            </Modal>
            <button onClick={openModal}>show question modal</button>{answer ? 'Yes' : 'No'}
        </div>)
};

export default QuestionModal;