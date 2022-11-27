
import React from "react";

const MidBanner = () => {
  return (
    <div className="text-center my-10 mb-60">
      <div>
        <h1 className="text-3xl my-5">Skills you will Learn from Us</h1>
        <div className="vertical lg:horizontal justify-evenly">
          <button className="disabled mx-5 my-3 btn text-white btn-error">HTML 5</button>
          <button className="disabled mx-5 my-3 btn btn-secondary">CSS 3</button>
          <button className="disabled mx-5 my-3 btn btn-accent">JavaScript</button>
          <button className="disabled mx-5 my-3 btn text-white btn-info">Reactjs</button>
          <button className="disabled mx-5 my-3 btn text-white btn-warning">Firebase</button>
          <button className="disabled mx-5 my-3 btn text-white btn-success">English</button>
          <button className="disabled mx-5 my-3 btn text-white btn-error">Web Development</button>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;