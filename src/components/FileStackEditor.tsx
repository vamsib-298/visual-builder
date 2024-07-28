import React, { useState } from 'react';
import { PickerOverlay } from 'filestack-react';

const FilestackExample: React.FC = () => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const onUploadDone = (res: any) => {
    setFileUrl(res.filesUploaded[0].url);
  };

  return (
    <div>
      <h2>Filestack Example</h2>

      <PickerOverlay
        apikey="YOUR_API_KEY"
        onSuccess={onUploadDone}
        pickerOptions={{
          accept: 'image/*',
          maxFiles: 1,
        }}
      />

      {fileUrl && (
        <div>
          <h3>Uploaded Image</h3>
          <img src={fileUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default FilestackExample;
