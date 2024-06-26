import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import ClientList from "./Pages/ClientList";
import Sidebar from "./Components/Sidebar";
import SendRecommendations from "./Pages/SendRecommendations";
import HistoricalRecos from "./Pages/HistoricalRecos";

function App() {
  return (
    <BrowserRouter>
      {/* <Header></Header> */}
      <div className="main d-flex">
        <div className="sidebarwrapper">
          <Sidebar></Sidebar>
        </div>
        <div className="container">
          <Routes>
            <Route path="/" exact={true} element={<Home></Home>}></Route>
            <Route
              path="/clientlist"
              exact={true}
              element={<ClientList></ClientList>}
            ></Route>
            <Route
              path="/sendrecommendations"
              exact={true}
              element={<SendRecommendations></SendRecommendations>}
            ></Route>
             <Route
              path="/historicalrecos"
              exact={true}
              element={<HistoricalRecos></HistoricalRecos>}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
