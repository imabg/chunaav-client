import React from "react";
import { connect } from "react-redux";

import { voterSession } from "../actions";

import "./thankU.css";

const ThankU = (props) => {
  setTimeout(() => {
    props.history.push("/");
    props.voterSession();
  }, 50000);

  return (
    <>
      <div className="alert alert-warning text-center" role="alert">
        You will be shortly (5-minutes) 😄 redirected to the main page please
        hold tight 😍
        <br />
        <u>Hope you will like our project</u>
      </div>
      <div className="mt-4">
        <p className="display-5 text-center">Meet the TEAM✌</p>
      </div>
      <hr />
      <div className="ml-4">
        <div className="text-center">
          <div className="row">
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://chunaav-team-photos.s3.ap-south-1.amazonaws.com/AkshayChauhan.jpg"
                  alt="Akshay Chauhan"
                  width="60%"
                  className="akshay"
                />
                <div className="card-body">
                  <h5 className="card-title">Akshay Chauhan 👮</h5>
                  <p className="card-text">
                    Roll number: <b>1606810046</b> <br />
                    Tech lead, enable proper cordination and give guidance and
                    contribute toward backend
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://chunaav-team-photos.s3.ap-south-1.amazonaws.com/Abhay.jpeg"
                  className="card-img-top"
                  alt="Abhay Goswami"
                  className="abhay"
                />
                <div className="card-body">
                  <h5 className="card-title">Abhay Goswami 🚑</h5>
                  <p className="card-text">
                    Roll number : <b>1606810010</b>
                    <br />
                    Developer, Involving in chunaav Backend and Frontend as
                    well. MERN-stack holder 😍
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://chunaav-team-photos.s3.ap-south-1.amazonaws.com/biku.jpeg"
                  className="card-img-top"
                  alt="Akash Bishwas"
                  className="biku"
                />
                <div className="card-body">
                  <h5 className="card-title">Akash Bishwas 🦄</h5>
                  <p className="card-text">
                    Roll number: <b>1606810041</b>
                    <br />
                    Unicorn, from UI to printout with Contents suggestions all
                    comes from here.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://chunaav-team-photos.s3.ap-south-1.amazonaws.com/shivangi.jpeg"
                  className="card-img-top"
                  alt="Shivangi Gupta"
                  className="shivangi"
                />
                <div className="card-body">
                  <h5 className="card-title">Shivangi Gupta 👧</h5>
                  <p className="card-text">
                    Roll number: <b>1606810298</b>
                    <br />
                    Unicorn, All the contents and paper along with technical
                    writting and data collection comes from here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <p className="text-center text-dark">
          You have to be an expert to solve BIG PROBLEMS ✌
        </p>
      </footer>
    </>
  );
};

const mapDispatchToProps = {
  voterSession,
};

export default connect(null, mapDispatchToProps)(ThankU);
