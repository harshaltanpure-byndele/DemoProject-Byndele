import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function HistRecosTableByDate() {
  const clients = [
    {
      name: "RELIANCE.NS",
      id: "10",
    },
    {
      name: "INFY.NS",
      id: "25",
    },
    {
      name: "TCS.NS",
      id: "",
    },
    {
      name: "DEEPAKNTR.NS",
      id: "",
    },
    {
      name: "ADANIENT.NS",
      id: "",
    },
  ];

  return (
    <>
      <div className="historical-recos-details">
        <table className="recos-table">
          <thead>
            <tr>
              <th>
                <div
                  style={{
                    fontSize: 15,
                    border: "4px solid #77ccfa",
                    borderRadius: 5,
                    width: 110,
                    marginBottom: 15,
                    width: 120,
                    textAlign: "center",
                    fontWeight: 400,
                  }}
                >
                  Date range <KeyboardArrowDownIcon />
                </div>
                <button
                  style={{
                    background: "#6d31ee",
                    color: "#ffff",
                    borderRadius: 5,
                    width: 90,
                    marginLeft: 10,
                  }}
                >
                  Filter
                </button>
              </th>
              <th>Stock name</th>
              <th>
                QTY recommendation for Buy(assuming total portfolio of 2L)
              </th>
              <th>Entry date and price (recommended)</th>
              <th>Exit date and price (recommended)</th>
              <th>Live trade?</th>
              <th>
                P&L from the trade(realized or unrealized)(trade based on 2L
                portfolio)
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" style={{ marginLeft: 50 }} />
                </td>
                <td>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ marginLeft: "10px", marginBottom: "0" }}>
                      {`${client.name}`}
                    </p>
                  </span>
                </td>
                <td>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ marginLeft: "10px", marginBottom: "0" }}>
                      {`${client.id}`}
                    </p>
                  </span>
                </td>
                {index === 2 || index === 3 || index === 4 ? (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                ) : (
                  <>
                    <td>
                      <div>
                        {index === 0 ? (
                          <>
                            <p style={{ marginBottom: 3 }}>2 Jan 2024</p>
                            <p style={{ opacity: 0.8 }}>1600</p>
                          </>
                        ) : (
                          <>
                            <p style={{ marginBottom: 3 }}>4 Jan 2024</p>
                            <p style={{ opacity: 0.8 }}>1600</p>
                          </>
                        )}
                      </div>
                    </td>
                    <td>
                      <div>
                        {index === 0 ? (
                          <>
                            <p style={{ marginBottom: 3 }}>5 Jan 2024</p>
                            <p style={{ opacity: 0.8 }}>1680</p>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </td>
                    <td>
                      <div>{index === 0 ? "No" : "Yes"}</div>
                    </td>
                    <td>
                      <div>
                        {index === 0 ? (
                          <>
                            <p style={{ marginBottom: 3 }}>1000</p>
                            <p style={{ opacity: 0.8 }}>realized</p>
                          </>
                        ) : (
                          <>
                            <p style={{ marginBottom: 3 }}>50</p>
                            <p style={{ opacity: 0.8 }}>unrealized</p>
                          </>
                        )}
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default HistRecosTableByDate;
