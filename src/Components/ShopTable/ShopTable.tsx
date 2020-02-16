import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from "../../Redux/store";
import { getProductsTC, updateProductTC } from "../../Redux/Reducers/ShopReducer";
import "./ShopTable.css"
import ShopAdd from "./ShopModals/ShopAdd";
import ShopDelete from './ShopModals/ShopDelete';
import ShopItem from './ShopItem';

const ShopTable = () => {

    const [editMode, setEditMode] = useState(false);

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsTC())
    }, [])

    const products = useSelector((store: AppStateType) => store.shop.products);

    const updateProduct = (id: string | undefined, productName: string, price: number) => {
        let updatedProduct = {
            product: {
                id, productName, price
            }
        }
        dispatch(updateProductTC(updatedProduct))
    }

    const editProduct = () => {
        // let updatedProduct = {
        //     product: {
        //         id, productName, price
        //     }
        // }
        // dispatch(updateProductTC(updatedProduct))
        setEditMode(true)
        return
    }

    let allProducts = products.map(p => {
        return <ShopItem key={p.id} p={p} />

        {/* {editMode ? <tr key={p.id} >
                    <td className="text-left"><input /></td>
                    <td className="text-left">geaag</td>
                    <td className="text-left"><ShopDelete id={p.id} />
                        <button onClick={() => { updateProduct(p.id, p.productName, p.price) }}>update</button>
                        <button onClick={() => { setEditMode(false) }}>save</button>
                    </td></tr >
                    : <tr key={p.id} >
                        <td className="text-left">{p.productName}</td>
                        <td className="text-left">{p.price}</td>
                        <td className="text-left"><ShopDelete id={p.id} />
                            <button onClick={() => { updateProduct(p.id, p.productName, p.price) }}>update</button>
                            <button onClick={() => { editProduct() }}>edit</button>
                        </td>
                    </tr>} */}
    })

    return (
        <div>
            <h2>Shop table</h2>
            <ShopAdd />
            <table className="table-fill">
                <thead>
                    <tr>
                        <th className="text-left">Product name</th>
                        <th className="text-left">Price</th>
                        <th className="text-left">Product type</th>
                        <th className="text-left">Rating</th>
                        <th className="text-left">Settings</th>
                    </tr>
                </thead>
                <tbody className="table-hover"></tbody>
                {allProducts}
            </table>
        </div>)
};

export default ShopTable;