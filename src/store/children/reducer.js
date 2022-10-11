import { 
  SET_USER_CHILDREN_DATA, 
  SET_USER_CHILDREN_ERROR, 
  SET_USER_CHILDREN_LOADING, 
  DELETE_USER_CHILDREN,
  ADD_CHILDREN
} from "./actions";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const UserChildrenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_CHILDREN_LOADING:
      return { ...state, loading: true };
    case SET_USER_CHILDREN_DATA:
      return { ...state, loading: false, data: action.payload };
    case SET_USER_CHILDREN_ERROR:
      return { ...state, loading: false, data: [...state.data], error: action.payload };
    case DELETE_USER_CHILDREN:
      return {...state, data: state.data.filter(({ id }) => id !== action.payload)};
      case ADD_CHILDREN:
        return {...state, data: [...state.data, action.payload], error: null}
    default:
      return state;
  }
};
