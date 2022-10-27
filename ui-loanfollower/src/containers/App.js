import React from 'react';
import { Outlet/* , Link */ } from 'react-router-dom';
import { connect } from 'react-redux';
/** import localcomponents */
import ActionHeader from '../components/ActionHeader';
/** import styles */
import "./App.css";

function App() {
  return (
    <div className="App">
      <ActionHeader />
      <Outlet />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
