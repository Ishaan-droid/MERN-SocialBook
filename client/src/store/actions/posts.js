import * as API from '../api';

export const getPosts = () => async dispatch => {
  try {
    const { data } = await API.fetchPost();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = post => async dispatch => {
  try {
    const { data } = await API.createPost(post);

    dispatch({ type: 'CREATE', payload: data.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const updatePost = (id, postData) => async dispatch => {
  try {
    const { data } = await API.updatePost(id, postData);

    dispatch({ type: 'UPDATE_POST', payload: data.data });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = id => async dispatch => {
  try {
    console.log(id);
    await API.deletePost(id);

    dispatch({ type: 'DELETE_POST', payload: id });
  } catch (err) {
    console.log(err);
  }
};
