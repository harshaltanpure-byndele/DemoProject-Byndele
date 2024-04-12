import React from "react";

import EditIcon from "@mui/icons-material/Edit";
import AAA from "./GirlIcon1.png";
import BBB from "./GirlIcon2.png";

function Client() {
  
  const clients = [
    {
      name: "AAA",
      id: "001",
      imageUrl: AAA,
    },
    {
      name: "EEE",
      id: "002",
      imageUrl: AAA,
    },
    { name: "BBB", id: "003", imageUrl: BBB },
    { name: "CCC", id: "004", imageUrl: BBB },
    {
      name: "DDD",
      id: "005",
      imageUrl: AAA,
    },
  ];

  return (
    <>
      {/* <h1>Client List</h1> */}
      <div className="content">
        <table className="client-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Client name and ID</th>
              <th>Notes on the Client</th>
              <th>Advisor Defined Tags</th>
              <th>Edit Details</th>
              <th>Client Portfolio Size</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={client.imageUrl}
                      alt={client.name}
                      width="30"
                      height="30"
                      style={{ borderRadius: "50%", marginLeft: "20px" }}
                    />
                    <p style={{ marginLeft: "10px", marginBottom: "0" }}>
                      ${client.name}_${client.id}
                    </p>
                  </span>
                </td>
                <td>
                  <p>Content</p>
                </td>
                <td>
                  <div className="advisortag">New Tag</div>
                </td>
                <td>
                  <EditIcon className="editcon" />
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Client;