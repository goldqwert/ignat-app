import React, { useState } from 'react';
import 'rc-time-picker/assets/index.css';
import { useSelector } from 'react-redux';
import { AppStateType } from "../../Redux/store";

const ShopTable = () => {

    const products = useSelector((store: any) => store.shop.products);

    return (
        <div>
           ShopTable
           {products.map((el: any) => <div>name: {el.product} price: {el.price}</div>)}
        </div>
    )

};

export default ShopTable;