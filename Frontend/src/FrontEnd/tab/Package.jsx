import React from 'react';
import { couple, quad, family } from '../../assets/images';

const PackagesPage = () => {
  // Container styles for the entire page
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5', // Light grey background for the page
    padding: '2vw',
  };

  // Style for the page title
  const titleStyle = {
    fontSize: '2vw',
    marginBottom: '3vw',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial'
  };

  // Container for the 3 boxes
  const boxesContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around', // Distribute space evenly between boxes
    width: '100%',
    maxWidth: '1400px', // Max width to prevent boxes from stretching too far
    gap: '2vw',
  };

  // Individual box styles
  const boxStyle = {
    width: '424px',
    height: '641px',
    backgroundColor: '#D9D9D9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Initial shadow for the box
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transitions for hover effects
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2vw',
    position: 'relative',
  };

  // Hover effect for the box
  const boxHoverStyle = {
    transform: 'scale(1.05)', // Slightly enlarge the box on hover
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
  };

  // Style for the images inside the box
  const imageStyle = {
    width: '383px',
    height: '397px',
    objectFit: 'cover', // Ensures the image covers the area without stretching
    borderRadius: '5px',
    marginBottom: '1vw',
  };

  // Style for the box title
  const boxTitleStyle = {
    position: 'absolute',
    top: '420px',          // Adjust freely (example positioning below the image)
    left: '20px',          // Adjust freely
    fontSize: '1.5vw',
    fontWeight: 'bold',
  };

  // Style for the box description
  const descriptionStyle = {
    position: 'absolute',
    color: '#555',
    top: '470px',          // Adjust freely (example positioning below the title)
    left: '20px',          // Adjust freely
    fontSize: '1vw',
    width: '100%',       // Ensures the text spans the width of the container
  };

  // Style for the 'See more' button
  const buttonStyle = {
    position: 'absolute',
    top: '520px',          // Adjust freely to place under the description
    left: '20px',          // Adjust freely
    padding: '10px 20px',
    border: '1px solid black',
    backgroundColor: 'transparent', // Transparent background
    color: 'black',
    fontSize: '1vw',
    cursor: 'pointer',
    textDecoration: 'none', // No underline initially
    borderRadius: '20px', // Rounded border
    transition: 'all 0.3s ease',
  };

  // Hover effect for the button (underline and arrow)
  const buttonHoverStyle = {
    textDecoration: 'underline',
    display: 'inline-block',
    content: '→', // Add arrow on hover
  };

  // Data for the boxes (image, title, description)
  const boxData = [
    {
      image: couple, // Replace with actual image path
      title: 'Couple Package',
      description: '1 Queen Bed / 2 Person, 220 sqft, Air Conditioning',
    },
    {
      image: quad, // Replace with actual image path
      title: 'Quad Package',
      description: '3 Super Single Beds / 3 Person, 220 sqft, Air Purifier',
    },
    {
      image: family, // Replace with actual image path
      title: 'Family Package',
      description: '1 Super Single Beds / 5 Person, 230 sqft, Air Conditioning',
    },
  ];

  return (
    <div style={pageStyle}>
      {/* Page title */}
      <h1 style={titleStyle}>OUR PACKAGE</h1>

      {/* Container for the three boxes */}
      <div style={boxesContainerStyle}>
        {boxData.map((box, index) => (
          <div
            key={index}
            style={boxStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = boxHoverStyle.transform;
              e.currentTarget.style.boxShadow = boxHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            {/* Image */}
            <img src={box.image} alt={box.title} style={imageStyle} />

            {/* Title */}
            <h2 style={boxTitleStyle}>{box.title}</h2>

            {/* Description */}
            <p style={descriptionStyle}>{box.description}</p>

            {/* See more button */}
            <button
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = buttonHoverStyle.textDecoration;
                e.currentTarget.innerHTML = `See more ${buttonHoverStyle.content}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = 'none';
                e.currentTarget.innerHTML = 'See more';
              }}
            >
              See more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesPage;


