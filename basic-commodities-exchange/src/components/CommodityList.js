import React from 'react';
import commodities from '../dummyData';

const CommodityList = () => {
  return (
    <div className="commodity-list-container">
      <h2>Commodities Exchange</h2>
      <div className="commodity-grid">
        {commodities.map(commodity => (
          <div key={commodity.id} className="commodity-box">
            <h3>{commodity.name}</h3>
            <p>Price: ${commodity.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommodityList;