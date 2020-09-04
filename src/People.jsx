import React from "react";

const People = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto bg-light">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.tittle}</h5>
            <p className="card-text">Skin_color: {props.skin_color}</p>
            <p className="card-text">Gender: {props.gender}</p>
            <p className="card-text">Homeworld: {props.homeworld}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default People;
