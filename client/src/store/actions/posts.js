import * as API from '../api';
import { constants } from '../constants/actionTypes';

export const getPosts = () => async dispatch => {
  try {
    const { data } = await API.fetchPost();

    dispatch({ type: constants.FETCH_ALL, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = post => async dispatch => {
  try {
    const { data } = await API.createPost(post);

    dispatch({ type: constants.CREATE, payload: data.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const updatePost = (id, postData) => async dispatch => {
  try {
    const { data } = await API.updatePost(id, postData);

    dispatch({ type: constants.UPDATE_POST, payload: data.data });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = id => async dispatch => {
  try {
    await API.deletePost(id);

    dispatch({ type: constants.DELETE_POST, payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const likePost = id => async dispatch => {
  try {
    const { data } = await API.likePost(id);

    dispatch({ type: constants.LIKE_POST, payload: data.data });
  } catch (err) {
    console.log(err.message);
  }
};
