import React, { useState } from 'react';
import { IoMdRadioButtonOn } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const PostReccoButton = ( {onButtonClick}) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigateToRecomStatus= useNavigate()
  // Function to handle button click
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    if (buttonIndex === 1) {
      // Navigate to the desired page when button1 is clicked
     console.log("button clicked")
      onButtonClick()
  }
    
  };

  return (
    <div className="button-container">
      <button
        className={`button-style ${selectedButton === 1 ? 'button-selected' : ''}`}
        onClick={() => handleButtonClick(1)}
      ><IoMdRadioButtonOn></IoMdRadioButtonOn>
        Post recos to clients' app and ask approval for trade
      </button>
      <button
        className={`button-style ${selectedButton === 2 ? 'button-selected' : ''}`}
        onClick={() => handleButtonClick(2)}
      ><IoMdRadioButtonOn></IoMdRadioButtonOn>
        Post recos to client's app only - no trade
      </button>
    </div>
  );
};

export default PostReccoButton;







