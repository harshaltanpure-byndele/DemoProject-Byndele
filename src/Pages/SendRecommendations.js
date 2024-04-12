import ScreenRIA from "../Components/SendReccomendations/ScreenRIAAndRAButton";

const SendRecommendations = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1>Send Current recommendations to client</h1>
        </div>
        <div className="row">
          <ScreenRIA></ScreenRIA>
        </div>
      </div>
    </>
  );
};
export default SendRecommendations;
