import React, { useState } from 'react';
import Client from './Tables/ClientDetailTable';

const ClientInfo = () => {
  const [activeTab, setActiveTab] = useState('button1');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <button
            className={`button ${activeTab === 'button1' ? 'active' : ''}`}
            onClick={() => handleClick('button1')}
          >
           <span>Client status</span>
          </button>
          <button
            className={`button ${activeTab === 'button2' ? 'active' : ''} separator`}
            onClick={() => handleClick('button2')}
          >
            <span>Client connfidential details</span>
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className={`content ${activeTab === 'button1' ? '' : 'd-none'}`}>
          <div>  <Client></Client></div>
          </div>
          <div className={`content ${activeTab === 'button2' ? '' : 'd-none'}`}>

            //Client connfidential details table should be place here
            Content for Div 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
