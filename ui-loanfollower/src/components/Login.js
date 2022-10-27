import React, { useEffect, useState } from 'react';
import loginStyles from '../static/css/Login.module.scss';
import { Form, Spinner } from 'react-bootstrap';
import { MdSend } from 'react-icons/md';
import { userStatus } from '../utils/constant';
import BasicTextBox from './formItems/BasicTextBox';
import BasicButton from './formItems/BasicButton';
import { Link } from 'react-router-dom';

const LoginComponent = ({ isLoginLoading, login, userDetails }) => {
    const [formValues, setFormValues] = useState({ userStatus: userDetails.status });
    const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(false);

    useEffect(() => {
        debugger;
        if (isLoginLoading) {
            setIsSubmitButtonEnabled(false)
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formValues.username)) {
            setIsSubmitButtonEnabled(true);
        } else {
            setIsSubmitButtonEnabled(false);
        }
    }, [formValues.username, isLoginLoading]);

    useEffect(() => {
        setFormValues({
            ...formValues,
            userStatus: userDetails.status
        });
    }, [userDetails.status]);

    /* useEffect(() => {
        if(formValues.userName) {
            isLoginLoading ? setIsSubmitButtonEnabled(false) : setIsSubmitButtonEnabled(true);
        }
    }, [isLoginLoading]); */

    const onLogin = (event) => {
        event.preventDefault();
        login(formValues);
    }

    const onChangeInput = (value, field) => {
        setFormValues({ ...formValues, [field]: value })
    }

    return (
        <div className={loginStyles.wrapper}>
            <div className={loginStyles.innerWrapper}>
                <div className={loginStyles.modalHeader}><h1>Login...</h1></div>
                <div>
                    <Form onSubmit={(event) => { onLogin(event) }}>
                        <BasicTextBox
                            label={'Username'}
                            value={formValues.username}
                            onChangeInput={(value) => onChangeInput(value, 'username')}
                            disabled={isLoginLoading}
                            isError={formValues.userStatus === userStatus.USER_NOT_AVAILABLE}
                            errorText={'Given User name is not available'}
                        />

                        {
                            (formValues.userStatus === userStatus.USER_AVAILABLE || formValues.userStatus === userStatus.USER_ALREADY_AVAILABLE) &&
                            <BasicTextBox
                                type='password'
                                label={'Password'}
                                value={formValues.password}
                                onChangeInput={(value) => onChangeInput(value, 'password')}
                                disabled={isLoginLoading}
                                isError={formValues.userStatus === userStatus.USER_NOT_AVAILABLE}
                                errorText={'Given User name is not available'}
                            />
                        }

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
                    Don't have account, <Link to="/register">Register here...</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;