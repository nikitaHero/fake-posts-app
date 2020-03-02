export const actionTypes = {
  GET_POSTS_REQUEST: "GET_POSTS_REQUEST",
  GET_POSTS_SUCCESS: "GET_POSTS_SUCCESS",
  GET_POSTS_ERROR: "GET_POSTS_ERROR",

  ADD_POST_REQUEST: "ADD_POST_REQUEST",
  ADD_POST_SUCCESS: "ADD_POST_SUCCESS",
  ADD_POST_ERROR: "ADD_POST_ERROR",

  UPDATE_POST_REQUEST: "UPDATE_POST_REQUEST",
  UPDATE_POST_SUCCESS: "UPDATE_POST_SUCCESS",
  UPDATE_POST_ERROR: "UPDATE_POST_ERROR",

  REMOVE_POST_REQUEST: "REMOVE_POST_REQUEST",
  REMOVE_POST_SUCCESS: "REMOVE_POST_SUCCESS",
  REMOVE_POST_ERROR: "REMOVE_POST_ERROR"
};

const initialState = {
  isFetching: false,
  isAddingPost: false,
  isUpdatingPost: false,
  posts: null,
  err: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload
      };
    case actionTypes.GET_POSTS_ERROR:
      return {
        ...state,
        isFetching: false,
        err: action.payload
      };

    case actionTypes.ADD_POST_REQUEST:
      return {
        ...state,
        isAddingPost: true
      };
    case actionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        isAddingPost: false
      };
    case actionTypes.ADD_POST_ERROR:
      return {
        ...state,
        isAddingPost: false,
        err: action.payload
      };

    case actionTypes.UPDATE_POST_REQUEST:
      return {
        ...state,
        isUpdatingPost: true
      };
    case actionTypes.UPDATE_POST_SUCCESS:
      return {
        ...state,
        isUpdatingPost: false
      };
    case actionTypes.UPDATE_POST_ERROR:
      return {
        ...state,
        isUpdatingPost: false,
        err: action.payload
      };

    case actionTypes.REMOVE_POST_REQUEST:
      return {
        ...state,
        isRemovingPost: true
      };
    case actionTypes.REMOVE_POST_SUCCESS:
      return {
        ...state,
        isRemovingPost: false
      };
    case actionTypes.REMOVE_POST_ERROR:
      return {
        ...state,
        isRemovingPost: false,
        err: action.payload
      };

    default:
      return state;
  }
};

export const actions = {
  getPostsRequest: () => ({
    type: actionTypes.GET_POSTS_REQUEST
  }),
  getPostsSuccess: payload => ({
    type: actionTypes.GET_POSTS_SUCCESS,
    payload
  }),
  getPostsError: payload => ({
    type: actionTypes.GET_POSTS_ERROR,
    payload
  }),

  addPostRequest: () => ({
    type: actionTypes.ADD_POST_REQUEST
  }),
  addPostSuccess: () => ({
    type: actionTypes.ADD_POST_SUCCESS
  }),
  addPostError: payload => ({
    type: actionTypes.ADD_POST_ERROR,
    payload
  }),

  updatePostRequest: () => ({
    type: actionTypes.UPDATE_POST_REQUEST
  }),
  updatePostSuccess: () => ({
    type: actionTypes.UPDATE_POST_SUCCESS
  }),
  updatePostError: payload => ({
    type: actionTypes.UPDATE_POST_ERROR,
    payload
  }),

  removePostRequest: () => ({
    type: actionTypes.REMOVE_POST_REQUEST
  }),
  removePostSuccess: () => ({
    type: actionTypes.REMOVE_POST_SUCCESS
  }),
  removePostError: payload => ({
    type: actionTypes.REMOVE_POST_ERROR,
    payload
  })
};
