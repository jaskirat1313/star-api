import React from "react";

const People = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 my-2 ">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.tittle}</h5>
            <p className="card-text">
              Skin_color: {props.skin_color}
              <br />
              Gender: {props.gender}
              <br />
              Homeworld: {props.homeworld}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default People;
