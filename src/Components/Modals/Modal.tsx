import React from 'react';
import s from './Modal.module.css'

interface IProps {
    show: boolean
    closeModal: () => void
}

const Modal: React.FC<IProps> = ({ show, children, closeModal }) => {

    if (!show) return null

    return (
        <div className={s.wrapper} onClick={closeModal}>
            <div className={s.container} onClick={(e) => { e.stopPropagation() }}>
                {children}
            </div>
        </div>
    )

};

export default Modal;