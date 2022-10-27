export const LOGIN_LOADING = 'LOGIN_LOADING';
export const CHECK_USER_STATUS = 'CHECK_USER_STATUS';
export const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';
export const REGISTER = 'REGISTER';

export const onLogin = (userCredentials) => {
    return {
        type: CHECK_USER_STATUS,
        userCredentials
    }
}

export const onRegister = (formValues) => {
    return {
        type: REGISTER,
        formValues
    }
}