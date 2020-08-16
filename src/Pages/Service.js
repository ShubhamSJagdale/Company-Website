import React from "react";
import Card from "../Layout_Blocks/Card";
import Data from "../Pages/Data";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto ">
            <div className="row">
              {Data.map((val, index) => (
                <Card key={val} imagesrc={val.imagesrc} title={val.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
