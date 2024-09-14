import React from "react";
import project from "./data/project.json";

const projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>Projects</h1>
        <div className="row d-flex justify-content-center">
          {project.map((data) => (
            <div
              key={data.id}
              className="my-2 col-6 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            >
              <div
                className="card bg-dark text-light"
                style={{
                  maxWidth: "100%",
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px 10px rgba(101,175,10,0.5)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-items-center p-3">
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

                <div className="card-body text-center">
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
