import {
    ERROR_AUTH,
    GET_USER_DATA,
    TOGGLE_AUTH,
    ADD_IMAGE,
    CHANGE_USER_DATA,
} from "./actions";

const initialState = {
    isAuth: false,
    data: [],
    error: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_AUTH:
            return { ...state, isAuth: payload };
        case GET_USER_DATA:
            return { ...state, error: null, data: payload };
        case ADD_IMAGE:
            return {
                ...state,
                data: {
                    ...state.data,
                    baseImagePath: payload,
                },
            };
        case CHANGE_USER_DATA:
            return {
                ...state, error: null, data: payload,
            }
        case ERROR_AUTH:
            return { ...state, error: payload };
        default:
            return state;
    }
};
