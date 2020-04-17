import React from "react";

const Candidates = (props) => {
  return (
    <>
      {props.candidates.map((candidates, index) => (
        <>
          <div
            className="alert alert-dark mt-4 text-center"
            role="alert"
            key={index}
          >
            {candidates.position}
          </div>
          <div className="row">
            {candidates.candidates.map((candidate) => (
              <div
                className="mx-4 col card text-center"
                style={{ width: "11rem" }}
              >
                <div className="card-body">
                  <p className="card-text">{candidate.name}</p>
                  <input
                    type="radio"
                    className="form-check-input"
                    value={candidate.id}
                    name={candidates.position}
                    onChange={props.handleOnChange}
                  />
                  <label className="form-check-label">Vote</label>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </>
  );
};

export default Candidates;
