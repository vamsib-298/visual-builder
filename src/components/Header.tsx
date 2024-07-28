// Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(({ }) => ({
  backgroundColor: '#bf6464', // Header background color
}));

const Header: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Visual Builder (VS Builder)
        </Typography>
        {/* Add any additional icons or elements here */}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
