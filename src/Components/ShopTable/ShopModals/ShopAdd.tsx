import React, { useState } from 'react';
import Modal from '../../Modals/Modal';
import { addProductTC } from '../../../Redux/Reducers/ShopReducer';
import { useDispatch } from 'react-redux';

const ShopAdd: React.FC = () => {

    const [show, setShow] = useState(false)
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState();
    let dispatch = useDispatch();
    const openModal = () => { setShow(true) }
    const closeModal = () => { setShow(false) }

    const addNewProduct = () => {
        let newProduct = {
            product: {
                productName: productName,
                price: price
            }
        }
        dispatch(addProductTC(newProduct))
        closeModal()
    }

    return (
        <div>
            <Modal show={show} closeModal={closeModal}>
                Please write info about a new product
                <div>
                    <input value={productName} onChange={(e) => { setProductName(e.currentTarget.value) }} />
                    <input type="number" value={price} onChange={(e) => { setPrice(e.currentTarget.value) }} />
                    <div><button onClick={addNewProduct}>Ok</button></div>
                </div>
            </Modal>
            <button onClick={openModal}>add</button>
        </div>)
};

export default ShopAdd;