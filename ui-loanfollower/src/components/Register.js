import React, { useEffect, useState } from 'react';
import loginStyles from '../static/css/Login.module.scss';
import { Form, Spinner } from 'react-bootstrap';
import { MdSend } from 'react-icons/md';
import BasicTextBox from './formItems/BasicTextBox';
import BasicButton from './formItems/BasicButton';
import { Link } from 'react-router-dom';

const RegisterComponent = ({ isLoginLoading, register }) => {

    const valueObj = {value: '', isFocused: false, error: ''};
    const [email, setEmail] = useState(valueObj);
    const [password, setPassword] = useState(valueObj);
    const [confirmPassword, setConfirmPassword] = useState(valueObj);
    // const [isFormValid, setIsFormValid] = useState(false);


    const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(false);

    const onRegister = (event) => {
        event.preventDefault();
        register({
            email: email.value,
            password: password.value
        });
    }

    const onChangeInput = (value, fn, obj) => {
        fn({...obj, value});
    }

    useEffect(() => {
        let err = '';
        if(email.isFocused){
            if(email.value === ""){
                err = "Email must not be empty..";
            } else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
                // setEmailErr("Email Not Valid");
                err = "Email not valid..";
            }
        }
        setEmail({...email, error: err});
    }, [email.value]);

    useEffect(() => {
        let err = '';
        if(password.isFocused){
            if(password.value === ""){
                err = "Password must not be empty..";
            } else if(!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password.value))){
                // setEmailErr("Email Not Valid");
                err = "Please Enter Strong password..";
            }
        }
        setPassword({...password, error: err});
    }, [password.value]);
    
    useEffect(() => {
        let err = '';
        if(confirmPassword.isFocused && confirmPassword.value !== password.value){
            err = "Password doesn't match..";
        }
        setConfirmPassword({...confirmPassword, error: err});
    }, [confirmPassword.value, password.value]);

    useEffect(() => {
        if(
            (email.value && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) && 
            (password.value && /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password.value) && password.value === confirmPassword.value)
        ) {
            setIsSubmitButtonEnabled(true);
        }
    }, [email, password, confirmPassword]);

    return (
        <div className={loginStyles.wrapper}>
            <div className={loginStyles.innerWrapper}>
                <div className={loginStyles.modalHeader}><h1>Register...</h1></div>
                <div>
                    <Form onSubmit={(event) => { onRegister(event) }}>
                        <BasicTextBox
                            label={'Email'}
                            value={email.value}
                            onChangeInput={(value) => onChangeInput(value, setEmail, email)}
                            errorText={email.error}
                            placeholder={'Enter Email'}
                            autoComplete='off'
                            onFocus={() => setEmail({...email, isFocused: true})}
                        />

                        <BasicTextBox
                            type='password'
                            label={'Password'}
                            value={password.value}
                            onChangeInput={(value) => onChangeInput(value, setPassword, password)}
                            errorText={password.error}
                            placeholder={'Enter Password'}
                            onFocus={() => setPassword({...password, isFocused: true})}
                            hint={'Password contails 8 character with one uppercase, one lowercase, one number and one special character'}
                        />

                        <BasicTextBox
                            type='password'
                            label={'Confirm Password'}
                            value={confirmPassword.value}
                            onChangeInput={(value) => onChangeInput(value, setConfirmPassword, confirmPassword)}
                            errorText={confirmPassword.error}
                            placeholder={'Enter Confirm Password'}
                            onFocus={() => setConfirmPassword({...confirmPassword, isFocused: true})}
                        />

                        <BasicButton
                            disabled={!isSubmitButtonEnabled}
                            label={'Submit'}
                        >
                            <span className={`${loginStyles.buttonIcon} buttonIcon`}>
                                {
                                    isLoginLoading ? <Spinner animation='border' />
                                        : <MdSend />
                                }
                            </span>
                        </BasicButton>
                    </Form>
                </div>
                <div>
                    Already have account, <Link to="/login">Login here...</Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterComponent;