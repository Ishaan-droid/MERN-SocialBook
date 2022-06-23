import { Avatar, Button, Grid, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useHistory } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import './styles.css';
import Input from './Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () => setShowPassword(prevValue => !prevValue);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // if(isSignUp) {
    //     dispatch(signup(formData,history))
    // } else {
    //     dispatch(signin(formData,history))
    // }
  };

  const switchMode = () => {
    setIsSignup(prevValue => !prevValue);
    handleShowPassword(false);
  };

  //   const googleSuccess = (res) => {

  //   };

  //   const googleFailure = () =>  console.log('Google sign in failed');

  return (
    <Container component="main" maxWidth="xs">
      <Paper className="paper" elevation={3}>
        <Avatar className="avatar">
          <LockIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          {/* <GoogleLogin
            clientId="GOOGLE_ID"
            render={renderProps => (
              <Button
                className="googleButton"
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          /> */}
          <Button type="submit" variant="contained" fullWidth color="primary" className="submit">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent="flexEnd">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? 'Already have an account? Sign In.'
                  : "Dont't have an account? Sign Up."}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
