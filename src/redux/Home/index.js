import api from '../../RestApi';
import { Config } from '@common';

//actions type
const types = {
    GETDATAHOME: 'GETDATAHOME',
    FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
    FETCH_DATA_FAIL: "FETCH_DATA_FAIL",
    GETDATAMORE: "GETDATAMORE",
    FETCH_DATA_MORE_SUCCESS: 'FETCH_DATA_MORE_SUCCESS'
}

//actions
export const fetchData = () => {
    return { type: types.GETDATAHOME }
}
export const fetchDataMore = () => {
    return { type: types.GETDATAMORE }
}
export const fetchDataSuccess = (data) => {
    return {
        type: types.FETCH_DATA_SUCCESS,
        data: data
    }
}
export const fetchDataMoreSuccess = (data) => {
    return {
        type: types.FETCH_DATA_MORE_SUCCESS,
        data: data
    }
}
export const fetchDataFail = (error) => {
    return {
        type: types.FETCH_DATA_FAIL,
        error: error
    }
}

//thunk
export const getDataHome = (page) => {
    return (dispatch) => {
        dispatch(fetchData());

        api.get(`photos?client_id=${Config.client_id}&page=${page}`)
            .then(response => {
                dispatch(fetchDataSuccess(response.data));
            }).catch(error => {
                console.log(error.response);
                dispatch(fetchDataFail(error));
            });
    }
}

export const getDataMore = (page) => {
    return (dispatch) => {
        dispatch(fetchDataMore());
        api.get(`photos?client_id=${Config.client_id}&page=${page}`)
            .then(response => {
                console.log(response);
                dispatch(fetchDataMoreSuccess(response.data));
            }).catch(error => {
                dispatch(fetchDataFail(error));
            });
    }
}
//state
const initialState = {
    loading: false,
    error: '',
    data: [],
    loadingMore: false,
}


//reducer
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GETDATAHOME:
            return {
                ...state,
                loading: true
            }
        case types.GETDATAMORE:
            return {
                ...state,
                loadingMore: true
            }
        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                loadingMore: false,
                error: ''
            }
        case types.FETCH_DATA_MORE_SUCCESS:
            return {
                ...state,
                loading: false,
                loadingMore: false,
                data: [...state.data, ...action.data],
                error: ''
            }
        case types.FETCH_DATA_FAIL:
            return {
                ...state,
                loading: false,
                loadingMore: false,
                error: action.error.message
            }
        default:
            return state;
    }
}