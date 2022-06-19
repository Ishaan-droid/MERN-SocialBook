const postReducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    case "UPDATE_POST":
      const post = {
        data: [],
      };
      post.data = posts.data.map((cur) =>
        cur._id === action.payload._id ? action.payload : cur
      );
      return post;
    default:
      return posts;
  }
};

export default postReducer;
