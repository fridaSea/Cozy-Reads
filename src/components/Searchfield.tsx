import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type FullWidthTextFieldProps = {
  handleInputChange:(e: any) => void
}

function FullWidthTextField({handleInputChange}:FullWidthTextFieldProps) {
  return (
    <Box sx={{ width: 500, maxWidth: '50%', textAlign: 'center'}} onChange={handleInputChange}>
      <TextField fullWidth label="Type to search by author" id="fullWidth" />
    </Box>
  );
}

export default FullWidthTextField