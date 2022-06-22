import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './store/actions/posts';

import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import './app.css';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

function App() {
  const [currentId, setCurrentId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar id="appBar" position="static" color="inherit">
          <Typography className="heading" variant="h2" align="center">
            SocialBook
          </Typography>
          <img className="image" src={memories} alt="memories" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
