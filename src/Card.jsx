// import React from "react";
// import Data from "Data";

export function Card(props) {
  console.log(props);
  return (
    <section>
      <div className="card-container">
        <div className="card">
          <div className="img-container">
            <img className="img" src={props.item.imageUrl} />
          </div>
        </div>
        <div className="text-container">
          <div className="top">
            <p className="location">{props.item.location}</p>
            <a className="google" href={props.item.googleMapsUrl}>
              {" "}
              View on google maps
            </a>
          </div>
          <h2 className="title">{props.item.title}</h2>
          <p className="date">
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p className="txt">{props.item.description}</p>
        </div>
      </div>
      <hr className="line"></hr>
    </section>
  );
}
