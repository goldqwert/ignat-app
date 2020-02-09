import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from "../../Redux/store";
import { getProductsTC, updateProductTC } from "../../Redux/Reducers/ShopReducer";
import "./ShopTable.css"
import ShopAdd from "./ShopModals/ShopAdd";
import ShopDelete from './ShopModals/ShopDelete';

const ShopTable: React.FC = () => {

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

    let allProducts = products.map(p => {
        return (
            <tr key={p.id}>
                <td className="text-left">{p.productName}</td>
                <td className="text-left">{p.price}</td>
                <td className="text-left"><ShopDelete id={p.id} />
                    <button onClick={() => { updateProduct(p.id, p.productName, p.price) }}>update</button></td>
            </tr>
        )
    })

    return (
        <div>
            <div>
                <h2>Shop table</h2>
                <ShopAdd />
                <table className="table-fill">
                    <thead>
                        <tr>
                            <th className="text-left">Product name</th>
                            <th className="text-left">Price</th>
                            <th className="text-left">Settings</th>
                        </tr>
                    </thead>
                    <tbody className="table-hover"></tbody>
                    {allProducts}
                </table>
            </div>
        </div>
    )

};

export default ShopTable;