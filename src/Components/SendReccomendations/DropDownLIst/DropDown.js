import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function DropdownComponent() {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index) => {
    setSelectedIndex(index);
    setIsOpenSelect(false);
  };

  return (
    <div className="selectDropWrapper position-relative">
      <span className="openSelect" onClick={openSelect}>
        Select All Lists for Trade and Recommendations
        <KeyboardArrowDownIcon style={{ paddingLeft: 8, fontSize: 30 }} />
      </span>
      {isOpenSelect && (
        <div className="selectDrop">
          <ul className="searchResult">
            <li
              onClick={() => closeSelect(0)}
              className={`${selectedIndex === 0 ? "active" : ""}`}
            >
              Select All Lists for Trade and Recommendations
            </li>
            <li
              onClick={() => closeSelect(1)}
              className={`${selectedIndex === 1 ? "active" : ""}`}
            >
              Select Only Hidden Lists
            </li>
            <li
              onClick={() => closeSelect(2)}
              className={`${selectedIndex === 2 ? "active" : ""}`}
            >
              Select Archived Lists
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownComponent;
