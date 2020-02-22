import axios from "axios"
import { INewProduct } from "../Redux/Reducers/ShopReducer";


const instance = axios.create({
    baseURL: "https://dry-forest-56016.herokuapp.com/"
});

export const auth = {
    register(email: string, password: string) {
        return instance.post("auth/register", { email, password })
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post("auth/login", { email, password, rememberMe })
    },
    forgot(email: string) {
        return instance.post("auth/forgot", { email })
    },
    me(token: string | null) {
        return instance.post("auth/me", { token })
    }
}

export const shop = {
    getProducts() {
        return instance.get("/shop?pageCount=10")
    },
    addNewProduct(newProduct: INewProduct) {
        return instance.post("/shop", newProduct)
    },
    updateProduct(updatedProduct: INewProduct) {
        return instance.put("/shop", updatedProduct)
    },
    deleteProduct(id: string | undefined) {
        return instance.delete(`/shop?id=${id}`)
    },
    buyProductAPI(id: string | undefined) {
        return instance.post('/shop/buy', id)
            .then(response => { alert(response.data.answer) })
    }
}

export const users = {
    getUsers() {
        return instance.get("/users")
    }
}