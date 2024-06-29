import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

function Reviews() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Customer Reviews</Typography>
      <form>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Review" fullWidth margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </Box>
  );
}

export default Reviews;
