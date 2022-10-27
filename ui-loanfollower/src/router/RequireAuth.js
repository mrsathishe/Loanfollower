import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

const RequireAuth = ({children, user}) => {

    const location = useLocation();

    if(!user.isLoggedIn){
        return <Navigate to='/login' state={{from: location}} replace />
    }

    if(user.isLoggedIn && (location.pathname === "/login" || location.pathname === "/register")) {
        return <Navigate to='/' state={{from: location}} replace />
    }

    return children;
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(RequireAuth);