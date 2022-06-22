import { constants } from '../constants/actionTypes';

const postReducer = (posts = [], action) => {
  switch (action.type) {
    case constants.FETCH_ALL:
      return action.payload;
    case constants.CREATE:
      return [...posts, action.payload];
    case constants.UPDATE_POST:
      const post = {
        data: [],
      };
      post.data = posts.data.map(cur => (cur._id === action.payload._id ? action.payload : cur));
      return post;
    case constants.DELETE_POST:
      const newPosts = {
        data: [],
      };
      newPosts.data = posts.data.filter(cur => cur._id !== action.payload.id);
      return newPosts;
    case constants.LIKE_POST:
      const likePost = {
        data: [],
      };
      likePost.data = posts.data.map(cur =>
        cur._id === action.payload._id ? action.payload : cur
      );
      return likePost;
    default:
      return posts;
  }
};

export default postReducer;
