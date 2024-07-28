import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import LayersIcon from '@mui/icons-material/Layers';
import AppsIcon from '@mui/icons-material/Apps';
import BrushIcon from '@mui/icons-material/Brush';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import './CustomSidebar.css';

const sidebarItems = [
  { icon: <AppsIcon className="sidebar-icon" />, text: 'Design' },
  { icon: <BrushIcon className="sidebar-icon" />, text: 'Elements' },
  { icon: <TextFieldsIcon className="sidebar-icon" />, text: 'Text' },
  { icon: <DesignServicesIcon className="sidebar-icon" />, text: 'Background' },
  { icon: <CloudUploadIcon className="sidebar-icon" />, text: 'Upload' },
  { icon: <PhotoLibraryIcon className="sidebar-icon" />, text: 'Photos' },
  { icon: <WallpaperIcon className="sidebar-icon" />, text: 'Graphics' },
  { icon: <LayersIcon className="sidebar-icon" />, text: 'Layers' },
  { icon: <AppsIcon className="sidebar-icon" />, text: 'Design' },
  { icon: <BrushIcon className="sidebar-icon" />, text: 'Elements' },

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
