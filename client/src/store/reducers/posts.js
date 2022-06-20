const postReducer = (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...posts, action.payload];
    case 'UPDATE_POST':
      const post = {
        data: [],
      };
      post.data = posts.data.map(cur => (cur._id === action.payload._id ? action.payload : cur));
      return post;
    case 'DELETE_POST':
      const newPosts = {
        data: [],
      };
      newPosts.data = posts.data.filter(cur => cur._id !== action.payload.id);
      return newPosts;
    default:
      return posts;
  }
};

export default postReducer;
