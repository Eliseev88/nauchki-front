import { SET_CHILD_DATA, SET_CHILD_ERROR, SET_CHILD_LOADER, SET_CHILD_STAGE } from './actions';

const initialState = {
    loading: false,
    data: null,
    error: null,
    stage: null,
};

export const ChildReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CHILD_LOADER:
            return {...state, loading: payload};
        case SET_CHILD_DATA:
            return {...state, data: payload};
        case SET_CHILD_ERROR:
            return {...state, error: payload};
        case SET_CHILD_STAGE:
            return {...state, stage: payload};
        default:
            return state;
    }
}
