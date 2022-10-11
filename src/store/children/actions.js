import { ChildrenAPI } from "../../API/childrenApi";

export const SET_USER_CHILDREN_LOADING = "USER_CHILDREN::SET_USER_CHILDREN_LOADING";
export const SET_USER_CHILDREN_DATA = "USER_CHILDREN::SET_USER_CHILDREN_DATA";
export const SET_USER_CHILDREN_ERROR = "USER_CHILDREN::SET_USER_CHILDREN_ERROR";
export const SET_IMG_CHILDREN = "USER_CHILDREN::SET_IMG_CHILDREN";
export const DELETE_USER_CHILDREN = "USER_CHILDREN::DELETE_USER_CHILDREN";
export const ADD_CHILDREN = "USER::ADD_CHILDREN";

const setUserChildrenLoading = () => ({
  type: SET_USER_CHILDREN_LOADING,
});
const setUserChildrenData = (data) => ({
  type: SET_USER_CHILDREN_DATA,
  payload: data,
});
export const setUserChildrenError = (error) => ({
  type: SET_USER_CHILDREN_ERROR,
  payload: error,
});
const deleteUserChildren = (idToDelete) => ({
  type: DELETE_USER_CHILDREN,
  payload: idToDelete,
});
export const setImg_children = () => ({
  type: SET_IMG_CHILDREN,
});
export const addChildren = (payload) => ({ 
  type: ADD_CHILDREN, 
  payload 
});

export const getUserChildrenThunk = () => async (dispatch) => {
  try {
    dispatch(setUserChildrenLoading());
    await ChildrenAPI.getUserChildren().then((res) => {
      dispatch(setUserChildrenData(res.data));
    });
  } catch (error) {
    dispatch(setUserChildrenError(error));
    console.log(error);
  }
};

export const deleteChildThunk = (childId) => async (dispatch) => {
  try {
    await ChildrenAPI.deleteChild(childId).then((res) => {
      dispatch(deleteUserChildren(childId));
    });
  } catch (error) {
    dispatch(setUserChildrenError(error));
    console.log(error);
  }
};

export const addUserChildrenThunk = (data) => async (dispatch) => {
  try {
    const response = await ChildrenAPI.addChildren(data);

    if (response?.request?.status === 200) {
      dispatch(addChildren(response.data));
    }
  } catch (error) {
    if (error.response.status === 403) {
      dispatch(setUserChildrenError('Проверьте данные ребенка.Возможно какие то поля не заполнены.'));
    }
    console.log(error);
  }
};
