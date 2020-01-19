import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com/auth'
});

export const auth = {
    register(email: string, password: number) {
        debugger
        return instance.post('/register', { email, password })
    }
}
