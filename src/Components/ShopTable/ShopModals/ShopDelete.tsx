import React, { useState } from 'react';
import Modal from '../../Modals/Modal';
import { deleteProductTC } from '../../../Redux/Reducers/ShopReducer';
import { useDispatch } from 'react-redux';

interface IProps {
    id: string | undefined
}

const ShopDelete = (props: IProps) => {

    const [show, setShow] = useState(false)
    const openModal = () => { setShow(true) }
    const closeModal = () => { setShow(false) }
    const dispatch = useDispatch()
    const closeModalAnswerYes = () => {
        dispatch(deleteProductTC(props.id))
        setShow(false)
    }

    const closeModalAnswerNo = () => { setShow(false) }

    return (
        <div>
            <Modal show={show} closeModal={closeModal}>
                Are you sure you want to delete this product?
                <div>
                    <button onClick={closeModalAnswerYes}>Yes</button>
                    <button onClick={closeModalAnswerNo}>No</button>
                </div>
            </Modal>
            <button onClick={openModal}>delete</button>
        </div>)
};

export default ShopDelete;