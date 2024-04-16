import ScreenRIA from "../Components/SendReccomendations/ScreenRIAAndRAButton";
import { useState } from "react";
import RecommStatus from "./RecommStatus";
const SendRecommendations = () => {
  const [showNewContent, setShowNewContent] = useState(true);

  // Function to show new content when called
  const handleShowRecommStatus = () => {
    setShowNewContent(false);
    console.log(showNewContent);
  };
  return (
    <>
      {showNewContent ?(<div className="container-fluid">
        <div className="row">
          <h1>Send Current recommendations to client</h1>
        </div>
        <div className="row">
          <ScreenRIA handleShowRecommStatus={handleShowRecommStatus}></ScreenRIA>
        </div>
        <div className="row"></div>
      </div>):(<RecommStatus></RecommStatus>) }
    </>
  );
};
export default SendRecommendations;
