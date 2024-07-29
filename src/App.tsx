import React, { useState } from 'react';
import { Box } from '@mui/material';
import CustomSidebar from './components/CustomSidebar/CustomSidebar';
import TextContent from './components/TextContent';
import UploadContent from './components/UploadContent';
import PhotosContent from './components/PhotosContent';
import EditPlayground from './components/EditPlayground';
import './App.css';
import Header from './components/Header';

const App: React.FC = () => {

  const handleTextGenerate = (text: string) => {
    setGeneratedText(text);
  };

  const handleImageSelect = (url: string) => {
    setSelectedImage(url);
  };

  const [selectedContent, setSelectedContent] = useState<JSX.Element | null>(<TextContent setGeneratedText={handleTextGenerate}/>);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedText, setGeneratedText] = useState<string>('');

  const handleItemClick = (text: string) => {
    switch (text) {
      case 'Text':
        setSelectedContent(<TextContent setGeneratedText={handleTextGenerate} />);
        break;

      case 'Upload':
        setSelectedContent(<UploadContent onImageSelect={handleImageSelect} />);
        break;
      case 'Photos':
        setSelectedContent(<PhotosContent onImageSelect={handleImageSelect} />);
        break;
      default:
        setSelectedContent(null);
    }
  };


  return (
    <div className="app-container">
      <Header />
      <div className="sidebar-and-content">
        <CustomSidebar onItemClick={handleItemClick} />
        <Box className="content-and-playground">
          <Box className="content-container">
            {selectedContent}
          </Box>
          <EditPlayground selectedImage={selectedImage} generatedText={generatedText} />
        </Box>
      </div>
    </div>
  );
};

export default App;
