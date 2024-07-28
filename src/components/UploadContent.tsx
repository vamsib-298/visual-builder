import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import './UploadContent.css';

const UploadContent: React.FC = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box className="upload-content">
      <Typography variant="h6">Upload Content</Typography>
      <TextField
        label="Search images by keyword"
        variant="outlined"
        fullWidth
        className="search-bar"
      />
      <Button variant="contained" component="label" className="upload-button">
        Upload Files
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>
      <Box className="upload-box">
        <Typography variant="body2" className="upload-text">
          Drag and drop your files here
        </Typography>
      </Box>
      {previewUrl && (
        <Box className="image-container">
          <img src={previewUrl} alt="Selected" className="image-preview" />
        </Box>
      )}
    </Box>
  );
};

export default UploadContent;
