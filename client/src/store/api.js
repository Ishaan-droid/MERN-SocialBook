import axios from 'axios';

const URL = `http://localhost:8000/posts`;

export const fetchPost = () => axios.get(URL);
export const createPost = newPost => axios.post(URL, newPost);
export const updatePost = (id, postData) => axios.patch(`${URL}/${id}`, postData);
export const deletePost = id => axios.delete(`${URL}/${id}`);
