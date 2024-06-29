import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

function Beauty() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Beauty & Skincare Uses of Saffron</Typography>
      <Button component={Link} to="/beauty/acne" variant="contained" color="primary">Acne and Blemishes</Button>
      <Button component={Link} to="/beauty/redness" variant="contained" color="secondary">Redness and Irritation</Button>
      <Button component={Link} to="/beauty/exfoliation" variant="contained" color="primary">Exfoliation</Button>
      <Button component={Link} to="/beauty/under-eye" variant="contained" color="secondary">Reduction of Under-Eye Bags</Button>
    </Box>
  );
}

export default Beauty;
