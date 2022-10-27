import React from 'react';
import RegisterComponent from '../components/Register';
import { onRegister } from '../actions/user.action';
import { connect } from 'react-redux';
import Welcome from './Welcome';
import Loading from './Loading';


const Register = ({isLoading, register}) => {
    return (
        <>
            {
                isLoading &&
                <Loading />
            }
            <Welcome>
                <RegisterComponent register={register} />
            </Welcome> 
        </>
    )
}

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
    userDetails: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
    register: (formValues) => dispatch(onRegister(formValues)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);