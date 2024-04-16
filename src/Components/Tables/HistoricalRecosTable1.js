import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function HistoricalRecosTable1() {
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
    {
      name: "ADANIENT.NS",
    },
  ];

  return (
    <>
      <div className="historical-recos-details" style={{ overflowX: "auto" }}>
        <table className="recos-table" style={{ width: "100%" }}>
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
                    cursor: "pointer",
                  }}
                >
                  Client ID <KeyboardArrowDownIcon />
                </div>
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
                    cursor: "pointer",
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
              <th>QTY recommended vs actual(Buy)</th>
              <th>QTY recommended vs actual(Sell)</th>
              <th>Entry date and price (recommended)</th>
              <th>Entry date and price (actual)</th>
              <th>Exit date and price (recommended)</th>
              <th>Exit date and price (actual)</th>
              <th>Early ext flag and QTY</th>
              <th>P&L from the trade</th>
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
                    <p
                      style={{
                        marginLeft: "10px",
                        marginBottom: "0",
                      }}
                    >
                      {client.name}
                    </p>
                  </span>
                </td>

                {index === 0 ? (
                  <>
                    <td>
                      <div>
                        <p style={{ marginBottom: 3 }}>10</p>
                        <p style={{ opacity: 0.8 }}>8</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p style={{ marginBottom: 3 }}>8</p>
                        <p style={{ opacity: 0.8 }}>8</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p style={{ marginBottom: 3 }}>2 Jan 2024</p>
                        <p style={{ opacity: 0.8 }}>1600</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p style={{ marginBottom: 3 }}>2 Jan 2024</p>
                        <p style={{ opacity: 0.8 }}>1601</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p style={{ marginBottom: 3 }}>5 Jan 2024</p>
                        <p style={{ opacity: 0.8 }}>1680</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p style={{ marginBottom: 3 }}>5 Jan 2024</p>
                        <p style={{ opacity: 0.8 }}>1680</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p style={{ marginBottom: 3 }}>No</p>
                        <p style={{ opacity: 0.8 }}>0</p>
                      </div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <div>
                        {index === 1 ? (
                          <>
                            <p style={{ marginBottom: 3 }}>Yes</p>
                            <p style={{ opacity: 0.8 }}>2</p>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </td>
                    <td>
                      <div></div>
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
export default HistoricalRecosTable1;
