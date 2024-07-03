import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <AppBar position="static" >
      <Toolbar className='navbar'>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          User Management
        </Typography>
        <Button color="inherit" component={Link} to="/add-user">Add User</Button>
        <Button color="inherit" component={Link} to="/users">Users</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
