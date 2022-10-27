import React from 'react';
import { onLogin } from '../actions/user.action';
import { connect } from 'react-redux';
import welcomeStyles from './welcome.module.scss';


const Welcome = ({isLoginLoading, login, userDetails, children}) => {
    return (
        <div className={welcomeStyles.loginPage}>
            <div className={welcomeStyles.headerTextWrapper}>
                <div className='container-fluid'>
                    <div className={welcomeStyles.headerText}>
                        welcome to our page
                    </div>
                </div>
            </div>
            <span className={welcomeStyles.splitter}></span>
            { children }
        </div>
    )
}

const mapStateToProps = state => ({
    isLoginLoading: state.user.isLoginLoading,
    userDetails: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
    login: (userCredentials) => dispatch(onLogin(userCredentials)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);