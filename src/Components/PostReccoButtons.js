import React, { useState } from 'react';
import { IoMdRadioButtonOn } from "react-icons/io";

const PostReccoButton = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  // Function to handle button click
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
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







