import { Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const PosterSlide = () => {
  const imagedata = [
    "https://i.ytimg.com/vi/VHh7R0BuO34/maxresdefault.jpg",
    "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202303/bits-pilani-sixteen_nine.jpg?size=948:533",
    "https://i.ytimg.com/vi/ScjYOEEwCnA/maxresdefault.jpg",
    "https://abped-college-dashboard.s3.us-east-2.amazonaws.com/tted/college-backend/college/ceb92a1e-c783-43d5-97d4-cd7337793859.jpg",
    "https://i.ytimg.com/vi/VHh7R0BuO34/maxresdefault.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatically change the image every 10 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagedata.length);
    }, 2000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <>
      <Box textAlign={"center"} p={2}>
        {imagedata?.map((imageUrl, index) => (
          <Box key={index} style={{ display: index === currentImageIndex ? 'block' : 'none' }}>
            <img src={imageUrl} alt={`poster-${index}`} style={{ width: '99%', height: '400px' }} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default PosterSlide;
