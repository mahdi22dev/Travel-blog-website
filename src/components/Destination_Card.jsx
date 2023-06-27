import React from "react";

const Destination_Card = ({ card }) => {
  const { city, country, continent, tourist_count, description } = card;
  return (
    <div className='des-card'>
      <h4>{city}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Destination_Card;
