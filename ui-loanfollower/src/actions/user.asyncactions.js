import { takeEvery, put, call } from "@redux-saga/core/effects";
import { baseURL, userStatus } from "../utils/constant";
import { CHECK_USER_STATUS, UPDATE_USER_STATUS, LOGIN_LOADING, USER_CHECK_SUCCESS } from "./user.action";

const headers = () => {
    const token = '';
    return {
      'content-type': 'application/json',
      accept: 'application/json',
    //   'cache-control': 'no-store',
    //   pragma: 'no-cache',
    //   authorization: token ? `Bearer ${token}` : '',
    //   'Access-Control-Allow-Origin': 'http://localhost:3000',
    //   'Access-Control-Allow-Credentials': 'true',
    };
};

export function* login({userCredentials}) {
    try {
        yield put({
            type: LOGIN_LOADING, isLoading: true
        });
        const endpoint = baseURL.apiURL + 'user/emailvalidate/';
        const response = yield call(fetch, endpoint, {
            headers: yield call(headers),
            method: 'POST',
            body: JSON.stringify(userCredentials)
        });
        const data = yield response.json();
        if (data && data.success) {
            if(data.payload && data.payload.token) {
                // yield put({type: LOGGED_IN});
            } else {
                yield put({type: UPDATE_USER_STATUS, data: data.payload});
            }
            
        } else {
            console.log('datarrr', data);
            // yield put({ type: SET_ERROR, data });
            // yield call(timeout, entity);
        }
    } catch (error) {
        // console.log('datarrr', error);data.userStatus
        yield put({type: UPDATE_USER_STATUS, data: {userStatus: userStatus.USER_AVAILABLE}})
        // yield put({ type: SET_ERROR, entity, error });
        // yield call(timeout, entity);
    } finally {
        yield put({
            type: LOGIN_LOADING, isLoading: false
        });
    }
}

export default function* user() {
    yield takeEvery(CHECK_USER_STATUS, login);
}

/*
{
    "success": true,
    "message": "",
    "payload": {
        "userStatus": "USER_AVAILABLE",
        "message": ""
    }
}
*/