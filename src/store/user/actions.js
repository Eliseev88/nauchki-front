import { LoginAPI } from "../../API/authApi";
import { UserAPI } from "../../API/userApi";

export const GET_USER_DATA = "USER::GET_USER_DATA";
export const TOGGLE_AUTH = "USER::TOGGLE_AUTH";
export const ERROR_AUTH = "USER::ERROR_AUTH";

export const getUserData = (payload) => ({
    type: GET_USER_DATA,
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

export const logout = () => (dispatch) => {
    localStorage.removeItem("TOKEN", "persist:root", "persist:auth");
    dispatch(toggleAuth(false));
  };
