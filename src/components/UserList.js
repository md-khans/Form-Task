import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';

const UserList = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ];

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Users
        </Typography>
        <List>
          {users.map((user) => (
            <ListItem key={user.id}>
              <ListItemText primary={user.name} secondary={user.email} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default UserList;
