import React from 'react';
import { Box, Typography } from '@mui/material';

const BackgroundContent: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6">Background Content</Typography>
      <Typography variant="body1">This is where you can put the content related to Background.</Typography>
      {/* Add your specific functionality or content here */}
    </Box>
  );
};

export default BackgroundContent;
