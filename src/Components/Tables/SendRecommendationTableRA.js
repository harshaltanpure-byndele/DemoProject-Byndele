import React from "react";
import EditIcon from "@mui/icons-material/Edit";

function SendRecommendationTableRA() {
  const clients = [
    {
      name: "RELIANCE.NS",
    },
    {
      name: "INFY.NS",
    },
    {
      name: "TCS.NS",
    },
    {
      name: "DEEPAKNTR.NS",
    },
  ];

  return (
    <>
      <div className="send-recomm-details">
        <table className="recomm-table">
          <thead>
            <tr>
              <th style={{ width: "90px", textAlign: "center" }}>Sl.no.</th>
              <th>Stock name</th>
              <th>QTY(assuming total investment of 200,000)</th>
              <th>Thematic tag,if any(optional)</th>
              <th>
                Approximate holding requirement (calendar days) (optional)
              </th>
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
                    <p style={{ marginLeft: "10px", marginBottom: "0" }}>
                      equal allocation*
                    </p>
                  </span>
                </td>
                <td>
                  <div className="advisortag">New Tag</div>
                </td>
                <td>
                  <EditIcon className="editcon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default SendRecommendationTableRA;
