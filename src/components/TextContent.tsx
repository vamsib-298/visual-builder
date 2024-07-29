import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import './TextContent.css';

interface TextContentProps {
  setGeneratedText: (text: string) => void;
}

const TextContent: React.FC<TextContentProps> = ({ setGeneratedText }) => {
  const [inputText, setInputText] = useState<string>('');
  const [generatedText, setGeneratedTextState] = useState<string>('');

  const handleGenerateText = () => {
    const generatedText = `${inputText}`;
    setGeneratedText(generatedText || 'No text generated');
    setGeneratedTextState(generatedText || 'No text generated');
  };

  return (
    <Box className="container">
      <Typography variant="h6">Text Content</Typography>
      <TextField
        label="Enter Text"
        variant="outlined"
        fullWidth
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="inputField"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerateText}
        className="generateButton"
      >
        Generate by AI
      </Button>
      <br />
      <br />
      <h5>AI Response :</h5>
      {generatedText && (
        <Box className="generatedContentBox">
          <Typography variant="body1" className="generatedText">{generatedText}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default TextContent;
