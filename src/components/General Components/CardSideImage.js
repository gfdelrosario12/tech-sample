import React from "react";

function CardSideImage({ imageUrl, title, text, cardWidth, cardHeight, imageWidth, imageHeight }) {
  return (
    <div className="card my-2" style={{ width: cardWidth, height: cardHeight }}>
      <div className="row g-0">
        <div className="col-md-4 card-side-img-border">
          <img
            src={imageUrl}
            className="img-fluid rounded-start"
            alt="Card"
            style={{ width: imageWidth, height: imageHeight, objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title title-font">{title}</h5>
            <p className="card-text normal-text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSideImage;
