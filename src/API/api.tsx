import axios from "axios"

const instance = axios.create({
    baseURL: "https://dry-forest-56016.herokuapp.com/auth"
});

export const auth = {
    register(email: string, password: string) {
        return instance.post("/register", { email, password })
    },
    login(email: string, password: string, rememberMe: boolean) {
        debugger
        return instance.post("/login", { email, password, rememberMe })
    },
    forgot(email: string) {
        return instance.post("/forgot", { email })
    },
    me(token: string | null) {
        return instance.post("/me", { token })
    }
}

// export const profileApi = {
//     postProfile(token: string | null) {
//         return instance.post(`me`, {token})
//     }
// }