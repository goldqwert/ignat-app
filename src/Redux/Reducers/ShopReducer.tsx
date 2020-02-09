import { shop } from "../../API/api";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppStateType } from "../store";

const SET_PRODUCTS = "appIgnat/shop/SET_PRODUCTS"

interface IState {
    products: IProducts[]
}
interface IProducts {
    id?: string
    productName: string
    price: number
    value?: boolean
}

export interface INewProduct {
    product: IProduct
}

export interface IProduct {
    id?: string,
    productName: string,
    price: number
}
interface IAction {
    type: typeof SET_PRODUCTS
    products: IProducts[]
}

const initialState: IState = {
    products: []
};

const shopReducer = (state: IState = initialState, action: IAction) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        default: return state
    }
};

export const setProducts = (products: IProducts) => ({ type: SET_PRODUCTS, products })

export default shopReducer;

export const getProductsTC = () => {
    return async (dispatch: Dispatch) => {
        const response = await shop.getProducts();
        if (response.data.products.length >= 1) {
            dispatch(setProducts(response.data.products))
        }
    }
}

export const addProductTC = (newProduct: INewProduct) => {
    return async (dispatch: ThunkDispatch<AppStateType, {}, IAction>) => {
        try {
            await shop.addNewProduct(newProduct);
            await dispatch(getProductsTC())
        } catch (e) {
            alert(e.response ? e.response.data.error : e.message)
        }
    }
}

export const updateProductTC = (updatedProduct: INewProduct) => {
    return async (dispatch: ThunkDispatch<AppStateType, {}, IAction>) => {
        try {
            await shop.updateProduct(updatedProduct);
            await dispatch(getProductsTC())
        } catch (e) {
            alert(e.response ? e.response.data.error : e.message)
        }
    }
}

export const deleteProductTC = (id: string | undefined) => {
    return async (dispatch: ThunkDispatch<AppStateType, {}, IAction>) => {
        try {
            await shop.deleteProduct(id);
            await dispatch(getProductsTC())
        } catch (e) {
            alert(e.response ? e.response.data.error : e.message)
        }
    }
}