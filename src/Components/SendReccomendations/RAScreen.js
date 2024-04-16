
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FaList } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import DropdownComponent from "./DropDownLIst/DropDown";
import SendRecommendationTableRA from "../Tables/SendRecommendationTableRA";
import PostReccoButton from "../PostReccoButtons";
const RAScreen = ({handleShowRecommStatus}) => {
  return (
    <>
        <div className="containerr-fluid">
        <div className="row data">
          <div className="col d-flex justify-content-between align-items-center">
            <div className="col-auto">
              <span className="list-drop">
                NOTE: QTY will be auto adjustedin proportion of 'client total
                investment'/200,000(rounded off)
                <KeyboardArrowDownIcon
                  style={{ marginLeft: 1, opacity: 0.7 }}
                />
              </span>
            </div>
            <div className="col-auto d-flex align-items-center">
              <div className="listICON1 position-relative d-flex align-items-center">
                <FaList></FaList>
              </div>
              <div className="listICON2 position-relative d-flex align-items-center">
                <MdOutlineDashboard></MdOutlineDashboard>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <DropdownComponent></DropdownComponent>
          </div>

        </div>
        <div className="row recc"> 
          <div className="col">
         <SendRecommendationTableRA></SendRecommendationTableRA>
          </div>  
        </div>
        <div className="row">

          <PostReccoButton  onButtonClick={handleShowRecommStatus}></PostReccoButton>
        </div>
      </div>
    </>
  );
};
export default RAScreen;
