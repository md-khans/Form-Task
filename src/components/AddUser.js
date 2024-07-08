import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import './AddUser.css'

const AddUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        courses: {
          React: false,
          Angular: false,
          Vue: false,
          NodeJS: false,
        },
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleCourseChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
          ...formData,
          courses: {
            ...formData.courses,
            [name]: checked,
          },
        });
      };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('User added:', formData);

    setFormData({
        name: '',
        email: '',
        password: '',
        gender: '',
        courses: {
          React: false,
          Angular: false,
          Vue: false,
          NodeJS: false,
        },
      });
    };
  

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
          <FormControl component="fieldset" margin="normal">
            <Typography component="legend">Courses</Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={formData.courses.React} onChange={handleCourseChange} name="React" />}
                label="React"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.courses.Angular} onChange={handleCourseChange} name="Angular" />}
                label="Angular"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.courses.Vue} onChange={handleCourseChange} name="Vue" />}
                label="Vue"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.courses.NodeJS} onChange={handleCourseChange} name="NodeJS" />}
                label="NodeJS"
              />
            </FormGroup>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Add User
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default AddUser;
