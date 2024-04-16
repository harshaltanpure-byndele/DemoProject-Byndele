import ScreenDateAndClient from "../Components/HistoricalRecos/ScreenDateAndClient"

const HistoricalRecos=()=>{
    return(<>
    <div className="container-fluid">
        <div className="row">
          <h1>Check Historical recommendations to client</h1>
        </div>
        <div className="row">
          <ScreenDateAndClient></ScreenDateAndClient>
        </div>
        <div className="row"></div>
      </div>
    </>)
}
export default HistoricalRecos