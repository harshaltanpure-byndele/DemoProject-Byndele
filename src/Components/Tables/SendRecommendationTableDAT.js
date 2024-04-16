import React from "react";
import EditIcon from "@mui/icons-material/Edit";

function SendRecommendationTableDAT() {
  const clients = [
    {
      name: "RELIANCE.NS",
      id: "3",
    },
    {
      name: "INFY.NS",
      id: "4",
    },
    {
      name: "TCS.NS",
      id: "10",
    },
    {
      name: "DEEPAKNTR.NS",
      id: "5",
    },
  ];

  return (
    <>
      <div className="send-recomm-DAT-details">
        <table className="recomm-DAT-table">
          <thead>
            <tr>
              <th style={{ width: "90px", textAlign: "center" }}>Sl.no.</th>
              <th>Stock name</th>
              <th>QTY(assuming total investment of 200,000)</th>
              <th>Thematic tag,if any(optional)</th>
              <th>
                Approximate holding requirement (calendar days) (optional)
              </th>
              <th>Recommendation on delivery from software</th>
              <th style={{ width: "140px" }}>Trade taken by client?</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" style={{ marginLeft: 33 }} />
                </td>
                <td>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <p
                      style={{ marginLeft: "10px", marginBottom: "0" }}
                    >{`${client.name}`}</p>
                  </span>
                </td>
                <td>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <p
                      style={{ marginLeft: "10px", marginBottom: "0" }}
                    >{`${client.id}`}</p>
                  </span>
                </td>
                <td>
                  <div
                    className="send-recomm-DAT-advisortag"
                    style={{ marginLeft: 20 }}
                  >
                    New Tag
                  </div>
                </td>
                <td>
                  <button className="sendrecomm-DAT-edit-button">
                    <EditIcon className="sendrecomm-DAT-editcon" />
                  </button>
                </td>
                <td>
                  <p style={{ marginLeft: 40 }}>{index === 0 ? "Y" : " "}</p>
                </td>
                <td>
                  <p style={{ marginLeft: 20 }}>{index === 0 ? "Y" : " "}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default SendRecommendationTableDAT;