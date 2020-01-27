export const validate = (email: string) => {
    const regExp = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,7}$/i;
    return regExp.test(String(email).toLowerCase())
};