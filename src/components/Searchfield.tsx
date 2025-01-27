import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FullWidthTextField() {
  return (
    <Box sx={{ width: 500, maxWidth: '50%', textAlign: 'center'}}>
      <TextField fullWidth label="Search by author" id="fullWidth" />
    </Box>
  );
}

export default FullWidthTextField