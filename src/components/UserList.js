import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'login', headerName: 'Name', width: 150 },
  { field: 'node_id', headerName: 'Email', width: 150 },
];

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log("🚀 ~ .then ~ data:", data)
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{textAlign: "center"}}>Loading...</div>;
  }

  if (error) {
    return <div style={{textAlign: "center"}}>Error: {error.message}</div>;
  }

  return (
    <div style={{ height: 530, width: '100%' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Users
      </Typography>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
   
  );
};

export default UserList;
