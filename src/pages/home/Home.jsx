import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/zeniark-logo.png";
import Container from "../../layouts/container/Container";
import "./home.css";

const HomePage = () => {
  return (
    <Container>
      <div className="page-home">
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
            <Link to="quiz" className="link-start">
              LET’S START!
            </Link>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
