import React from "react";
import Button from "../../components/global/button/Button";
import Container from "../../layouts/container/Container";
import "./quiz.css";
import { MdCheck, MdClose } from "react-icons/md";

const Quiz = () => {
  return (
    <Container>
      <h1>Quiz</h1>
      <div className="btn-container">
        <Button handleClick={() => alert("True!")} className="true-btn">
          <MdCheck className="btn-icons" /> True
        </Button>
        <Button handleClick={() => alert("False!")} className="false-btn">
          <MdClose className="btn-icons" /> False
        </Button>
      </div>
    </Container>
  );
};

export default Quiz;
