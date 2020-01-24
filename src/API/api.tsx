import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com/auth'
});

export const auth = {
    register(email: string, password: number) {
        return instance.post('/register', { email, password })
    },
    login(email: string, password: number, rememberMe: boolean) {
        return instance.post('/login', { email, password, rememberMe })
    }
}
