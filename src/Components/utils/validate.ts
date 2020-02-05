export const validate = (email: string) => {
    // eslint-disable-next-line no-useless-escape
    const regExp = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,7}$/i;
    return regExp.test(String(email).toLowerCase())
};