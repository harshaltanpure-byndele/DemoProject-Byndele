import SendRecommendationTableDAT from "../Components/Tables/SendRecommendationTableDAT";

const RecommStatus = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <h1>Status of recommendation delivery and trade</h1>
        <hr></hr>
        </div>
        <div className="row ">
         <SendRecommendationTableDAT></SendRecommendationTableDAT>
        </div>
      </div>
    </>
  );
};
export default RecommStatus;
