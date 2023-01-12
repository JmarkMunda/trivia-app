import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import logo from "../../assets/zeniark-logo.png";

const HomePage = () => {
  return (
    <div className="page page-home">
      <img src={logo} alt="zeniark-logo" />
      <div className="page-title">
        <h2>Welcome to the Trivia Challenge!</h2>
      </div>
      <div className="page-body">
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 10/10?</p>
      </div>
      <div className="page-control">
        <button>
          <Link to="quiz">LET’S START!</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
