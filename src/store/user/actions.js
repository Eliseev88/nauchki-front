import { LoginAPI } from "../../API/authApi";
import { UserAPI } from "../../API/userApi";

export const GET_USER_DATA = "USER::GET_USER_DATA";
export const TOGGLE_AUTH = "USER::TOGGLE_AUTH";
export const ERROR_AUTH = "USER::ERROR_AUTH";
export const ADD_IMAGE = "USER::ADD_IMAGE";
export const CHANGE_USER_DATA = "USER::CHANGE_USER_DATA";

export const getUserData = (payload) => ({
    type: GET_USER_DATA,
    payload,
});

export const addImage = (payload) => ({
    type: ADD_IMAGE,
    payload,
});

export const toggleAuth = (payload) => ({
    type: TOGGLE_AUTH,
    payload,
});

export const errorAuth = (payload) => ({
    type: ERROR_AUTH,
    payload,
});

export const changeUserData = (payload) => ({
    type: CHANGE_USER_DATA,
    payload,
});

export const asyncApiCall = (email, password) => async (dispatch) => {
    await LoginAPI.auth(email, password)
        .then((res) => {
            localStorage.setItem("TOKEN", res.data);
            dispatch(toggleAuth(true));
        })
        .catch((err) => {
            dispatch(errorAuth(err));
        });

    await UserAPI.getAuthUser()
        .then((res) => {
            if (localStorage.getItem("TOKEN")) {
                dispatch(getUserData(res.data));
                dispatch(toggleAuth(true));
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getUserDataThunk = () => async (dispatch) => {
    try {
        const response = await UserAPI.getAuthUser();
        if (response?.request?.status === 200) {
            dispatch(getUserData(response.data));
            dispatch(toggleAuth(true));
        }
    } catch (error) {
        console.log(error);
        if (error.response.status === 410) {
            localStorage.removeItem("TOKEN", "persist:root", "persist:auth");
            dispatch(toggleAuth(false));
            window.location.href = 'login';
        }
    }
};

export const addImageThunk = (data) => async (dispatch) => {
    try {
        const response = await UserAPI.postAddImg(data);
        if (response?.request?.status === 200) {
            dispatch(addImage(response.data));
        }
    } catch (error) {
        console.log(error);
    }
};

export const changeUserDataThunk = (data) => async (dispatch) => {
    try {
        const response = await UserAPI.putChangeUserData(data);
        if (response?.request?.status === 200) {
            dispatch(changeUserData(response.data));
        }
    } catch (error) {
        console.log(error);
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem("TOKEN", "persist:root", "persist:auth");
    dispatch(toggleAuth(false));
};
