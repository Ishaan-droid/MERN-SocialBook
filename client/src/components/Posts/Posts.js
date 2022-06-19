import { useSelector } from "react-redux";
import Post from "./Post/Post";
import { Grid, CircularProgress } from "@mui/material";
import "./Posts.css";
import { useEffect, useState } from "react";

const Posts = ({ setCurrentId }) => {
  const [loader, setLoader] = useState(true);
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    if (posts.data?.length) {
      setLoader(false);
    }
  }, [posts]);

  // console.log(posts);

  return loader ? (
    <CircularProgress />
  ) : (
    <Grid className="container" container alignItems="stretch" spacing={3}>
      {posts?.data.map((cur) => (
        <Grid item key={cur._id} xs={12} sm={6}>
          <Post post={cur} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
