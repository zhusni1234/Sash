import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Box, Container } from '@mui/material';

// Import the 4 images for the gallery (replace with actual imports)
import cp1 from '../../../assets/images/cp1.jpeg';
import cp2 from '../../../assets/images/cp2.jpeg';
import cp3 from '../../../assets/images/cp3.jpeg';
import cp4 from '../../../assets/images/cp4.jpeg';



// Hair style data
const hairStyles = [
    {
      name: "Classic Pompadour",
      image: cp1,
      description: "A timeless style with volume and slicked-back elegance, perfect for formal occasions."
    },
    {
      name: "Buzz Cut",
      image: cp2,
      description: "A low-maintenance, sharp cut that emphasizes facial features. Ideal for an easy-going, clean look."
    },
    {
      name: "Undercut",
      image: cp3,
      description: "A trendy, modern style with short sides and longer top, offering a bold contrast."
    },
    {
      name: "Fade",
      image: cp4,
      description: "Smoothly tapered from the sides to the skin, this haircut is great for a fresh, modern vibe."
    },
];

const AdSlideImage = () => {
    // Slick settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1, // Show 1 image at a time
      slidesToScroll: 1,
      autoplay: false, // Set to false for manual control
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="h3" gutterBottom>
            Couple Package
          </Typography>
        </Box>
        
        <Box sx={{ marginBottom: '3cm', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '600px', position: 'relative' }}> {/* Fixed width for the gallery */}
            <Slider {...settings}>
              {hairStyles.map((style, index) => (
                <Box key={index} sx={{ padding: '0 1rem', textAlign: 'center' }}>
                  <img
                    src={style.image}
                    alt={style.name}
                    style={{
                      width: '600px', // Set fixed width for uniformity
                      height: '600px', // Set fixed height for uniformity
                      objectFit: 'cover', // Makes sure image fits without distortion
                      borderRadius: '8px',
                      marginBottom: '1rem',
                    }}
                  />
                  <Typography variant="h5" gutterBottom>
                    {style.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {style.description}
                  </Typography>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Container>
    );
};

// Custom arrow components
const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} custom-arrow`} onClick={onClick} style={arrowStyle}>
            &#10095; {/* Right arrow symbol */}
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} custom-arrow`} onClick={onClick} style={arrowStyle}>
            &#10094; {/* Left arrow symbol */}
        </div>
    );
};

// Arrow styles
const arrowStyle = {
    fontSize: '2rem',
    color: 'black', // Arrow color
    cursor: 'pointer',
    zIndex: 1, // Ensure they are on top of images
    position: 'absolute',
    top: '50%', // Vertically center the arrows
    transform: 'translateY(-50%)', // Center the arrows vertically
};

// Additional styling for container
const containerStyle = {
    position: 'relative', // Position relative for absolute positioning of arrows
};

export default AdSlideImage;

