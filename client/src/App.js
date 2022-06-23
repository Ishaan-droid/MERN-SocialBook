import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import './app.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
