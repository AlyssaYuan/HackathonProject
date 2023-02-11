import React, { useState } from "react";


export default function Card(props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card-container">
      <div className="card">
        <img className="img-cover" src={`/images/${props.img}`} />
        <div className="card-stats">
          <img className="rating-star" src="/images/star.png" />
          <span>{props.rating}</span>
          <span> ({props.reviews})</span>
        </div>
        <div className="card-info">
          <span>{props.name}</span>
          {showMore && (
            <>
              <span>{props.address}</span>
              <span>{props.phone}</span>
            </>
          )}
        </div>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Less Info" : "More Info"}
        </button>
      </div>
    </div>
  );
}

