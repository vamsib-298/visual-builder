// import React, { useState } from 'react';
// import { Box } from '@mui/material';
// import CustomSidebar from './components/CustomSidebar/CustomSidebar';
// import DesignContent from './components/DesignContent';
// import TextContent from './components/TextContent';
// import BackgroundContent from './components/BackgroundContent';
// import UploadContent from './components/UploadContent';
// import PhotosContent from './components/PhotosContent';
// import LayersContent from './components/LayersContent';
// import EditPlayground from './components/EditPlayground';
// import './App.css';
// import Header from './components/Header';

// const App: React.FC = () => {
//   const [selectedContent, setSelectedContent] = useState<JSX.Element | null>(<DesignContent />);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const handleItemClick = (text: string) => {
//     switch (text) {
//       case 'Design':
//         setSelectedContent(<DesignContent />);
//         break;
//       case 'Text':
//         setSelectedContent(<TextContent />);
//         break;
//       case 'Background':
//         setSelectedContent(<BackgroundContent />);
//         break;
//       case 'Upload':
//         setSelectedContent(<UploadContent />);
//         break;
//       case 'Photos':
//         setSelectedContent(<PhotosContent onImageSelect={handleImageSelect} />);
//         break;
//       case 'Layers':
//         setSelectedContent(<LayersContent />);
//         break;
//       default:
//         setSelectedContent(null);
//     }
//   };

//   const handleImageSelect = (url: string) => {
//     setSelectedImage(url);
//   };

//   return (
//     <div className="app-container">
//       <Header />
//       <div className="sidebar-and-content">
//         <CustomSidebar onItemClick={handleItemClick} />
//         <Box className="content-and-playground">
//           <Box className="content-container">
//             {selectedContent}
//           </Box>
//           <EditPlayground selectedImage={selectedImage} /> {/* Pass the selected image here */}
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { Box } from '@mui/material';
import CustomSidebar from './components/CustomSidebar/CustomSidebar';
import DesignContent from './components/DesignContent';
import TextContent from './components/TextContent';
import BackgroundContent from './components/BackgroundContent';
import UploadContent from './components/UploadContent';
import PhotosContent from './components/PhotosContent';
import LayersContent from './components/LayersContent';
import EditPlayground from './components/EditPlayground';
import './App.css';
import Header from './components/Header';

const App: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<JSX.Element | null>(<DesignContent />);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleItemClick = (text: string) => {
    switch (text) {
      case 'Design':
        setSelectedContent(<DesignContent />);
        break;
      case 'Text':
        setSelectedContent(<TextContent />);
        break;
      case 'Background':
        setSelectedContent(<BackgroundContent />);
        break;
      case 'Upload':
        setSelectedContent(<UploadContent />);
        break;
      case 'Photos':
        setSelectedContent(<PhotosContent onImageSelect={handleImageSelect} />);
        break;
      case 'Layers':
        setSelectedContent(<LayersContent />);
        break;
      default:
        setSelectedContent(null);
    }
  };

  const handleImageSelect = (url: string) => {
    setSelectedImage(url);
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
          <EditPlayground selectedImage={selectedImage || ''} /> {/* Pass the selected image here */}
        </Box>
      </div>
    </div>
  );
};

export default App;
