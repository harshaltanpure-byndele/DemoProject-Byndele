import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function ClientPortfolioTable() {
  const clients = [
    {
      name: "RELIANCE.NS",
    },
    {
      name: "CASH",
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
    <div className="client-portfolio-details" style={{ overflowX: "auto" }}>
      <table className="portfolio-table" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: 120 }}>
              <div
                style={{
                  fontSize: 15,
                  border: "4px solid #77ccfa",
                  borderRadius: 5,
                  width: 120,
                  marginBottom: 15,
                  textAlign: "center",
                  fontWeight: 400,
                  cursor: "pointer",
                }}
              >
                Client ID <KeyboardArrowDownIcon />
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
            <th>QTY in portfolio</th>
            <th>Entry date and price (recommended)</th>
            <th>Entry date and price (actual)</th>
            <th>Current value</th>
            <th>Recommended or self initiated</th>
            <th>Current P&L</th>
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
                    {client.name}
                  </p>
                </span>
              </td>

              {index === 0 ? (
                <>
                  <td>
                    <div>
                      <p style={{ marginBottom: 3 }}>10</p>
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
                      <p style={{ marginBottom: 3 }}>4200</p>
                    </div>
                  </td>

                  <td>
                    <div>
                      <p style={{ marginBottom: 3 }}>Recommended</p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p style={{ marginBottom: 3 }}>300</p>
                    </div>
                  </td>
                </>
              ) : index === 1 ? (
                <>
                  <td></td>
                  <td></td>
                  <td></td>

                  <td>
                    <div>
                      <p style={{ marginBottom: 3 }}>100000</p>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientPortfolioTable;
