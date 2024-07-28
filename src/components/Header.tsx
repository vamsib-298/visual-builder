// Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import '../components/Header.css';

const Header: React.FC = () => {
  return (
    <AppBar position="static" className="header-appbar">
      <Toolbar className="header-toolbar">
        <Typography variant="h6" textAlign="center" component="div" className="header-title">
          Visual Builder 
        </Typography>
        {/* Add any additional icons or elements here */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
