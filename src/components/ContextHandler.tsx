import TextContent from './TextContent';
import UploadContent from './UploadContent';
import PhotosContent from './PhotosContent';

export const handleItemClick = (
  text: string,
  setSelectedContent: (content: JSX.Element | null) => void,
  handleTextGenerate: (text: string) => void,
  handleImageSelect: (url: string) => void
) => {
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
