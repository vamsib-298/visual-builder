import React, { FC, useEffect, useState } from "react";
import { Box, TextField, Button } from '@mui/material';
import { createApi } from "unsplash-js";
import "../components/PhotoContent.css"; 

type Photo = {
  id: string;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};

const api = createApi({
  accessKey: "4qpG6Y9_qRcyfR3fYZG1feUSvoGTWimcw9P-biueOyo"
});

interface PhotosContentProps {
  onImageSelect: (url: string) => void;
}

const PhotosContent: FC<PhotosContentProps> = ({ onImageSelect }) => {
  const [data, setPhotosResponse] = useState<any>(null);
  const [query, setQuery] = useState<string>("cat");

  useEffect(() => {
    fetchPhotos(query);
  }, []);

  const fetchPhotos = (searchQuery: string) => {
    api.search
      .getPhotos({ query: searchQuery, orientation: "landscape" })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  };

  const handleSearch = () => {
    fetchPhotos(query);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <Box sx={{ padding: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <TextField
            label="Search Photos"
            variant="outlined"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            sx={{ marginRight: 1 }}
          />
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </Box>
        <div className="feed">
          <ul className="columnUl">
            {data.response.results.map((photo: Photo, index: number) => (
              <li key={photo.id} className="li" onClick={() => onImageSelect(photo.urls.regular)}>
                <img className="img" src={photo.urls.regular} alt={photo.user.name} />
                <a
                  className="credit"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://unsplash.com/@${photo.user.username}`}
                >
                  {/* {photo.user.name} */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Box>
    );
  }
};

export default PhotosContent;
