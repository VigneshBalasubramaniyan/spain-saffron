import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

function Medicinal() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Medicinal Uses of Saffron</Typography>
      <Button component={Link} to="/medicinal/cardio" variant="contained" color="primary">Cardiovascular Health</Button>
      <Button component={Link} to="/medicinal/weight" variant="contained" color="secondary">Weight Management</Button>
    </Box>
  );
}

export default Medicinal;
