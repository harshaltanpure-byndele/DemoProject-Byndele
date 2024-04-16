import React, { useState } from "react";
import HtRecByDate from "./HtRecByDate";
import HtRecByDateAndRange from "./HtRecByClientAndRange";


const ScreenDateAndClient= ({ handleShowRecommStatus }) => {
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
              <span>Historical recos by date range</span>
              {/* <hr></hr> */}
            </button>
            <button
              className={`button ${activeTab === "button2" ? "active" : ""}`}
              onClick={() => handleButtonClick("button2")}
            >
              <span>Historical recos by client and date range</span>

              {/* <hr></hr> */}
            </button>
            <hr></hr>
          </div>
        </div>

        <div className="row">
          <div className="" style={{}}>
            {activeTab === "button1" ?<HtRecByDate/> : <HtRecByDateAndRange/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenDateAndClient;
