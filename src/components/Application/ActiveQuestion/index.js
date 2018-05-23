import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Pre = styled.pre`
  white-space: pre-wrap;
  max-width: 750px;
`;

const ActiveQuestion = ({ question }) => (
  <div>
    <h1>{question.question}</h1>
    <Pre>{question.answer}</Pre>
  </div>
);

const mapStateToProps = state => ({
  question: state.questions.activeQuestion
});

const StyledActiveQuestion = styled(ActiveQuestion)`
  background: red;
`;

export default connect(mapStateToProps)(StyledActiveQuestion);
