// import React from 'react';
// import { Box, IconButton } from '@mui/material';
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import '../components/EditPlayground.css';
// import Example from './PinturaEditor';

// interface EditPlaygroundProps {
//   selectedImage: string | null;
// }

// const EditPlayground: React.FC<EditPlaygroundProps> = ({ selectedImage }) => {
//   return (
//     <Box className="edit-playground">
//       <Box className="edit-appbar">
//         <IconButton aria-label="bold" className="icon-button">
//           <FormatBoldIcon />
//         </IconButton>
//         <IconButton aria-label="italic" className="icon-button">
//           <FormatItalicIcon />
//         </IconButton>
//         <IconButton aria-label="underline" className="icon-button">
//           <FormatUnderlinedIcon />
//         </IconButton>
//         <IconButton aria-label="add" className="icon-button">
//           <AddCircleOutlineIcon />
//         </IconButton>
//         <IconButton aria-label="refresh" className="icon-button">
//           <RefreshIcon />
//         </IconButton>
//       </Box>
//       <Box className="editing-area">
//         <Example selectedImage={selectedImage} />
//       </Box>
//     </Box>
//   );
// };

// export default EditPlayground;

// import React from 'react';
// import { Box, IconButton } from '@mui/material';
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import Example from './PinturaEditor';
// import '../components/EditPlayground.css';

// interface EditPlaygroundProps {
//   selectedImage: string | null;
// }

// const EditPlayground: React.FC<EditPlaygroundProps> = ({ selectedImage }) => {
//   return (
//     <Box className="edit-playground">
//       <Box className="edit-appbar">
//         <IconButton aria-label="bold" className="icon-button">
//           <FormatBoldIcon />
//         </IconButton>
//         <IconButton aria-label="italic" className="icon-button">
//           <FormatItalicIcon />
//         </IconButton>
//         <IconButton aria-label="underline" className="icon-button">
//           <FormatUnderlinedIcon />
//         </IconButton>
//         <IconButton aria-label="add" className="icon-button">
//           <AddCircleOutlineIcon />
//         </IconButton>
//         <IconButton aria-label="refresh" className="icon-button">
//           <RefreshIcon />
//         </IconButton>
//       </Box>
//       <Box className="editing-area">
//         {selectedImage ? (
//           <Example selectedImage={selectedImage} />
//         ) : (
//           <div>Please select an image from the PhotosContent.</div>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default EditPlayground;
import React from 'react';
import { Box, IconButton } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RefreshIcon from '@mui/icons-material/Refresh';
import Example from './PinturaEditor';
import '../components/EditPlayground.css';

interface EditPlaygroundProps {
  selectedImage: string | null;
}

const EditPlayground: React.FC<EditPlaygroundProps> = ({ selectedImage }) => {
  return (
    <Box className="edit-playground">
      <Box className="edit-appbar">
        <IconButton aria-label="bold" className="icon-button">
          <FormatBoldIcon />
        </IconButton>
        <IconButton aria-label="italic" className="icon-button">
          <FormatItalicIcon />
        </IconButton>
        <IconButton aria-label="underline" className="icon-button">
          <FormatUnderlinedIcon />
        </IconButton>
        <IconButton aria-label="add" className="icon-button">
          <AddCircleOutlineIcon />
        </IconButton>
        <IconButton aria-label="refresh" className="icon-button">
          <RefreshIcon />
        </IconButton>
      </Box>
      <Box className="editing-area">
        <Example selectedImage={selectedImage} />
      </Box>
    </Box>
  );
};

export default EditPlayground;
