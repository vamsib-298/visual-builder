import React, { useState, useEffect } from 'react';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import WebFont from 'webfontloader';

interface Font {
  family: string;
  category: string;
}

const TextContent: React.FC = () => {
  const [fonts, setFonts] = useState<Font[]>([]);
  const [selectedFont, setSelectedFont] = useState<string>('Roboto'); // Default font
  const [previewText, setPreviewText] = useState<string>('Hii Vamsi');

  useEffect(() => {
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyARqYXddgaKv73m2XDQ59t0JeACPBk_164')
      .then(response => response.json())
      .then(data => setFonts(data.items))
      .catch(error => console.error('Error fetching fonts:', error));
  }, []);

  const handleFontChange = (event: SelectChangeEvent<string>) => {
    const fontName = event.target.value as string;
    setSelectedFont(fontName);

    WebFont.load({
      google: {
        families: [fontName],
      },
    });
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6">Text Content</Typography>
      <Typography variant="body1">This is where you can select and preview fonts.</Typography>
      <FormControl fullWidth sx={{ marginTop: 2 }}>
        <InputLabel>Select Font</InputLabel>
        <Select value={selectedFont} onChange={handleFontChange}>
          {fonts.map((font) => (
            <MenuItem key={font.family} value={font.family}>
              <Typography style={{ fontFamily: font.family }}>{font.family}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box
        sx={{
          marginTop: 2,
          padding: 2,
          border: '1px solid #ddd',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="h6" style={{ fontFamily: selectedFont }}>
          {previewText}
        </Typography>
      </Box>
    </Box>
  );
};

export default TextContent;
