import { home } from "../../assets/images";
import React from "react";

const Home = () => {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',           // Ensure it fills at least the viewport height
    backgroundSize: 'cover',      // Cover the entire container
    backgroundPosition: 'center',  // Center the background image
    backgroundRepeat: 'no-repeat', // Prevent repeating
    width: '100%',
  };

  const topTextStyle = {
    fontSize: '1.5vw',              // Responsive font size based on viewport width
    color: 'black',
    fontFamily: 'Arial',
    marginBottom: '1vw',          // Responsive margin
  };



  const buttonStyle = {
    marginTop: '1vw',
    padding: '1vw 2vw',         // Responsive padding
    fontSize: '1vw',            // Responsive font size
    color: 'white',
    backgroundColor: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    fontFamily: 'Arial',
  };

  const buttonHoverStyle = {
    backgroundColor: 'grey',
    color: 'white',
  };

  const beigeSectionStyle = {
    backgroundColor: '#EEE4DE',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '9vw',               // Responsive padding
  };

  const textContentStyle = {
    position: 'relative',        // Enables you to use top, left, etc.
    left: '-25vw',                // Moves the text 2vw to the left
    top: '1vw',                  // Moves the text 1vw down (you can use negative values to move it up)
    maxWidth: '400px',
    overflow: 'hidden',
    boxSizing: 'border-box',
    textAlign: 'justify',
  };
  


  // New black section styles
  const blackSectionStyle = {
    backgroundColor: 'black',
    color: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'absolute',      // Center items horizontally
    padding: '5vw',
    position: 'relative',      // Relative positioning for absolute adjustments later
    minHeight: '45vh', 
  };

  const blackSectionTextStyle = {
    fontSize: '1vw',
    maxWidth: '600px',
    textAlign: 'justify',
    lineHeight: '1.5',
    marginTop: '-1.5vw',         // Use a negative margin to move the text upwards
    marginBottom: '2vw',
    textDecoration: 'underline',
    color: 'white',            // Ensure text color is white
  };

  const lineStyle = {
    width: '100%',             // Full width of the container
    height: '0.5px',            // Thin line height
    backgroundColor: 'white', // Color of the line
    margin: '1.5vw 0',        // Space around the line
    marginTop: '5vw',         // Use a negative margin to move the text upwards
    marginBottom: '2vw',
  };

  

  return (
    <>
      <div style={containerStyle}>
        <div style={topTextStyle}>
          Create your camping experience with
        </div>
         <div>
            <img src={home} className="flex items-center" />
            <h1 className="font-bold text-white z-20 -mt-[30rem]">HASH</h1>
          </div>
        <button
          style={buttonStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.currentTarget.style.color = buttonHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
            e.currentTarget.style.color = buttonStyle.color;
          }}
        >
          BOOK NOW
        </button>
      </div>
      <div style={beigeSectionStyle}>
        <div style={textContentStyle}>
          <h2>Unforgettable Family Adventures in Nature</h2>
          <p>Camping with your family is a delightful blend of adventure 
            and bonding that creates lasting memories. 
            Imagine setting up a cozy tent together, 
            the excitement of roasting marshmallows over a crackling campfire, and the joy of stargazing under a blanket of twinkling stars. 
            The simplicity of nature invites everyone to disconnect from technology and reconnect with each other.</p>
        </div>
      </div>
      {/* New black section */}
      <div style={blackSectionStyle}>
        <div style={blackSectionTextStyle}>
          <p>
            Contact us </p>
          <p>FAQs</p>
          <p>Terms of service</p>
          <p>Cancellation policy</p>
          <p> Refund policy</p>
          <div style={lineStyle}></div> {/* Thin line added here */}
        </div>
      </div>
    </>
  );
};

export default Home;
