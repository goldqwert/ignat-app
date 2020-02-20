import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from "../../Redux/store";
import { getProductsTC } from "../../Redux/Reducers/ShopReducer";
import "./ShopTable.css"
import ShopAdd from "./ShopModals/ShopAdd";
import ShopItem from './ShopItem';

const ShopTable = () => {

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsTC())
    }, [])

    const products = useSelector((store: any) => store.shop.products);

    let allProducts = products.map((p: any) => {
        return <ShopItem key={p.id} p={p} />
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