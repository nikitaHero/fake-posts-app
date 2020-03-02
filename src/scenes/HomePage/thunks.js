import axios from "axios";
import { actions } from "./ducks";
import { toastr } from "react-redux-toastr";

export const getPosts = () => {
  return async dispatch => {
    await dispatch(actions.getPostsRequest());
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      await dispatch(actions.getPostsSuccess(res.data));
      await toastr.success("Success", "Posts is uploaded!");
    } catch (err) {
      await dispatch(actions.getPostsError(err));
    }
  };
};

export const addPost = data => {
  return async dispatch => {
    await dispatch(actions.addPostRequest());
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: data.title,
        body: data.body,
        userId: data.userId
      });
      await toastr.success("Success", "Post added!");
      await dispatch(actions.addPostSuccess());
    } catch (err) {
      await dispatch(actions.addPostError(err));
    }
  };
};

export const removePost = id => {
  return async dispatch => {
    await dispatch(actions.removePostRequest());
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      await dispatch(actions.removePostSuccess());
      await toastr.success("Success", `Post № ${id} deleted! `);
    } catch (err) {
      await dispatch(actions.removePostError(err));
    }
  };
};
