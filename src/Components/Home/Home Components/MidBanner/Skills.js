import React from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div>
      <div className="text-center my-10">
        <div>
          <h1 className="text-3xl my-5">Skills you will Learn from Us</h1>
          <div className="vertical lg:horizontal justify-evenly">
            <Link className="mx-5 my-3 btn text-white btn-error">HTML 5</Link>
            <Link className="mx-5 my-3 btn btn-secondary">CSS 3</Link>
            <Link className="mx-5 my-3 btn btn-accent">JavaScript</Link>
            <Link className="mx-5 my-3 btn text-white btn-info">Reactjs</Link>
            <Link className="mx-5 my-3 btn text-white btn-warning">
              Firebase
            </Link>
            <Link className="mx-5 my-3 btn text-white btn-success">
              English
            </Link>
            <Link className="mx-5 my-3 btn text-white btn-error">
              Web Development
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
