import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import memories from '../../images/memories.png';
import './styles.css';

const Navbar = () => {
  const user = null;
  return (
    <AppBar id="appBar" position="static" color="inherit">
      <div className="brandContainer">
        <Link to="/">
          <Typography className="heading" variant="h2" align="center">
            SocialBook
          </Typography>
        </Link>
        <img className="image" src={memories} alt="memories" height="60" />
      </div>
      <Toolbar className="toolbar">
        {user ? (
          <div className="profile">
            <Avatar className="purple" alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className="userName" variant="h6">
              {user.result.name}
            </Typography>
            <Button variant="contained" className="logout" color="secondary">
              Logout
            </Button>
          </div>
        ) : (
          <Link to="/auth">
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
