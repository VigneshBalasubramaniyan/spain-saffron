import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

function Home() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Welcome to our Saffron's Usages chatbot!</Typography>
      <Button component={Link} to="/medicinal" variant="contained" color="primary">Medicinal</Button>
      <Button component={Link} to="/beauty" variant="contained" color="secondary">Beauty & Skincare</Button>
    </Box>
  );
}

export default Home;
