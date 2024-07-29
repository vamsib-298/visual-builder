import React, { useRef } from 'react';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { toPng } from 'html-to-image';
import '../components/EditPlayground.css';

interface EditPlaygroundProps {
  selectedImage: string | null;
  generatedText: string;
}

const EditPlayground: React.FC<EditPlaygroundProps> = ({ selectedImage, generatedText }) => {
  const editingAreaRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = () => {
    if (editingAreaRef.current) {
      toPng(editingAreaRef.current).then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'edited-content.png';
        link.href = dataUrl;
        link.click();
      });
    }
  };

  return (
    <Box className="edit-playground">
      <AppBar position="static" className="app-bar">
        <Toolbar className="toolbar">
          <Button
            variant="contained"
            color="primary"
            onClick={handleDownload}
            className="publish-button"
          >
            Publish
          </Button>
        </Toolbar>
      </AppBar>
      <Box className="editing-area" ref={editingAreaRef}>
        {selectedImage && (
          <img src={selectedImage} alt="Selected" className="image-preview" />
        )}
        {!selectedImage && (
          <Typography variant="h6" className="generated-text">
            {generatedText}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default EditPlayground;
