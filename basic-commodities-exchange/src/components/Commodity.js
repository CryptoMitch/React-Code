import React from 'react';

const Commodity = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Commodity;