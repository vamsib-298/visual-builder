import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import './CustomSidebar.css';

const sidebarItems = [
  { icon: <TextFieldsIcon className="sidebar-icon" />, text: 'Text' },
  { icon: <CloudUploadIcon className="sidebar-icon" />, text: 'Upload' },
  { icon: <PhotoLibraryIcon className="sidebar-icon" />, text: 'Photos' },

];

interface CustomSidebarProps {
  onItemClick: (text: string) => void;
}

const CustomSidebar: React.FC<CustomSidebarProps> = ({ onItemClick }) => {
  const [selectedItem, setSelectedItem] = useState<string>('');

  const handleItemClick = (text: string) => {
    setSelectedItem(text);
    onItemClick(text);
  };

  return (
    <Box className="custom-sidebar">
      <List>
        {sidebarItems.map((item, index) => (
          <ListItem
            button
            key={index}
            className={`sidebar-item ${selectedItem === item.text ? 'selected' : ''}`}
            onClick={() => handleItemClick(item.text)}
          >
            <ListItemIcon sx={{ minWidth: 0 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="caption" className="sidebar-text">
                  {item.text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CustomSidebar;
