import { IoMdRadioButtonOn } from "react-icons/io";
import { TfiAlignCenter } from "react-icons/tfi";
import VerticalStepper from "../Components/VerticalStepper";
import SearchBox from "../Components/SearchBox";
import ClientInfo from "../Components/ClientInfo";

export default function ClientList() {
  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center">
            <div className="col-1 ">
          <h3>Client List</h3>
        </div>
        <div className="col-2">
        <button className="newClientbtn  d-flex align-items-center" >
            <IoMdRadioButtonOn></IoMdRadioButtonOn>
            <span>Create new client list</span>
          </button>
        </div>
        <div className="col-3">
         <button className="newClientbtn  d-flex align-items-center" >
            <IoMdRadioButtonOn></IoMdRadioButtonOn>
            <span>Add  new client to existing list</span>
          </button>
        </div>
        <div className="col"><SearchBox></SearchBox></div>
        <div className="col">
            <div className="filter d-flex align-items-center">
              <button> <TfiAlignCenter></TfiAlignCenter></button>
            </div>
        </div>
      </div>
      <div className="row">
       <div className="col">
       <ClientInfo></ClientInfo>
       </div>
       <div className="col-md-4 d-flex align-items-center">
        <VerticalStepper ></VerticalStepper>
       </div>
      </div>
      <div></div>
    </div>
  );
}
