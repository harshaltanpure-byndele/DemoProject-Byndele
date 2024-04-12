import React, { useState } from "react";
import RIAScreen from "./RIAScreen";
import RAScreen from "./RAScreen";

const ScreenRIA = () => {
  const [activeTab, setActiveTab] = useState("button1");

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="ScreenRIAAndRAbutton">
      {" "}
      <div className="container">
        <div className="row ">
          <div className="col">
            <button
              className={`button ${activeTab === "button1" ? "active" : ""}`}
              onClick={() => handleButtonClick("button1")}
            >
              <span>Send Recommendations(RIA Screen)</span>
              {/* <hr></hr> */}
            </button>
            <button
              className={`button ${activeTab === "button2" ? "active" : ""}`}
              onClick={() => handleButtonClick("button2")}
            >
              <span>Send Recommendations(RA Screen)</span>

              {/* <hr></hr> */}
            </button>
            <hr></hr>
          </div>
        </div>

        <div className="row">
          <div className="" style={{}}>
            {activeTab === "button1" ? <RIAScreen /> : <RAScreen />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRIA;
