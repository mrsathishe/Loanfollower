import React from 'react';
import { connect } from 'react-redux';
import { addIncrement } from '../actions/app.action';

const Home = ({count, increment}) => {
    return (
        <div>
            <h1> Home </h1>
            
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => increment(count)}
                >
                    Increment
                </button>
                <span>{count}</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    count: state.app.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: (value) => dispatch(addIncrement(value)),
})

/** if use multiple actions functions will be use like this. */
/*
import * as actions from './actions';
import { bindActionCreators } from 'redux';
const mapDispatchToProps = (dispatch) => ({
    increment: bindActionCreators(...actions, dispatch),
})
*/

export default connect(mapStateToProps, mapDispatchToProps)(Home);