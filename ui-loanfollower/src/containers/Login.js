import React from 'react';
import LoginComponent from '../components/Login';
import { onLogin } from '../actions/user.action';
import { connect } from 'react-redux';
import Welcome from './Welcome';


const Login = ({isLoginLoading, login, userDetails}) => {
    return (
        <Welcome>
            <LoginComponent login={login} isLoginLoading={isLoginLoading} userDetails={userDetails} />
        </Welcome>
        
    )
}

const mapStateToProps = state => ({
    isLoginLoading: state.user.isLoginLoading,
    userDetails: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
    login: (userCredentials) => dispatch(onLogin(userCredentials)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);