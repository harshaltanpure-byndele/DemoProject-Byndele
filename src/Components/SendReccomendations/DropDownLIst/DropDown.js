import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';


const DropdownComponent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select All Lists for Trade and Recommendations');
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  // Handle click outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const options = [
    'Select All Lists for Trade and Recommendations',
    'Select Only Hidden Lists',
    'Select Archived Lists',
  ];

  return (
    <div className="dropdown" ref={dropdownRef}>
      {/* Dropdown list */}
      <div className="dropdown-list" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <span>{selectedOption}</span>
        <FaChevronDown />
      </div>

      {/* Dropdown menu */}
      {dropdownOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={option}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
