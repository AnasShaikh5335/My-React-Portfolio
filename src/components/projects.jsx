import React from "react";
import project from "./data/project.json";

const projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>Projects</h1>
        <div className="row">
          {project.map((data) => (
            <div
              key={data.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center"
            >
              <div
                className="card bg-dark text-light"
                style={{
                  width: "100%",
                  maxWidth: "18rem",
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px 5px rgba(101,175,10,0.5)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-items-center p-2">
                  <img
                    src={`/assets/${data.imageSrc}`}
                    className="card-img-top"
                    alt={data.title}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      border: "2px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                <div className="card-body text-center p-2">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>

                  <a
                    href={data.source}
                    className="btn btn-warning"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default projects;
