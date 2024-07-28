import React from 'react';
import { Box, Typography } from '@mui/material';
import './ContentDisplay.css';

interface ContentDisplayProps {
  content: string;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ content }) => {
  return (
    <Box className="content-display">
      <Typography variant="h6">
        {content || 'Select an item from the sidebar to see content.'}
      </Typography>
    </Box>
  );
};

export default ContentDisplay;
