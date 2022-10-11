import { childApi } from "../../API/childApi";

export const SET_CHILD_DATA = 'CHILD::SET_CHILD_DATA';
export const SET_CHILD_LOADER = 'CHILD::SET_CHILD_LOADER';
export const SET_CHILD_ERROR = 'CHILD::SET_CHILD_ERROR';
export const SET_CHILD_STAGE = 'CHILD::SET_CHILD_STAGE';

export const setChildData = (data) => ({
    type: SET_CHILD_DATA,
    payload: data
});
export const setChildError = (error) => ({
    type: SET_CHILD_ERROR,
    payload: error
});
export const setChildLoader = (isLoading) => ({
    type: SET_CHILD_LOADER,
    payload: isLoading
}); 
export const setChildStage = (data) => ({
    type: SET_CHILD_STAGE,
    payload: data
}); 

export const getChildDataThunk = (id) => async (dispatch) => {
    try {
        dispatch(setChildLoader(true));
        const response = await childApi.getChild(id);
        if (response?.request?.status === 200) {
            dispatch(setChildData(response.data));
        }
    } catch (e) {
        if (e.response.status === 403) {
            dispatch(setChildError('Такого ребенка не найдено'));
        }
        console.log(e);
    } finally {
        dispatch(setChildLoader(false));
    }
}

export const getChildStageThunk = (gender, age) => async (dispatch) => {
    try {
        const response = await childApi.getStage(gender, age);
        if (response?.request?.status === 200) {
            dispatch(setChildStage(response.data));
        }
    } catch (e) {
        console.log(e);
    }
}
