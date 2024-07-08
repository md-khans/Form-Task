import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import './App.css'
import myImage from './logo.jpg';





function App() {
  return (
    <>
      <Navbar />
      <div className='container-background'>
      <img src={myImage} alt="My Image" className='image' />
        <div className="form-container">
          <Container maxWidth="sm">
            <Routes>
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/users" element={<UserList />} />
            </Routes>
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
