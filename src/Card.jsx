// import React from "react";
// import Data from "Data";

export function Card() {
  return (
    <section>
      <div className="card-container">
        <div className="card">
          <div className="img-container">
            <img src="src/assets/location1.png" />
          </div>
        </div>
        <div className="text-container">
          <p className="location">China</p>
          <h2 className="title">Test Header</h2>
          <p className="date">1/2/2023</p>
          <p className="txt">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate suscipit alias impedit aliquid
            assumenda soluta, mollitia sequi, tenetur labore sint magni dolorem quis, dignissimos dolores quia dicta
            itaque. Fugiat, nam?
          </p>
        </div>
      </div>
      <hr className="line"></hr>
    </section>
  );
}
