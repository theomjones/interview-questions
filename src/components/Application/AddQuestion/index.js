import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
// import { dispatch } from "redux";

import Input from "../../Input";
import TextArea from "../../TextArea";
import Button from "../../Button";

import { addQuestion } from "../../../Store/actions";

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: ""
    };

    this.answerInput = React.createRef();

    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleQuestionChange(event) {
    const question = event.target.value;
    this.setState(() => ({ question }));
  }

  handleAnswerChange(event) {
    const answer = event.target.value;
    this.setState(() => ({ answer }));
  }

  submit(event) {
    event.preventDefault();
    this.props.addQuestion(this.state);
    this.setState(() => ({ answer: "", question: "" }));
    this.answerInput.current.focus();
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div className={this.props.className}>
          <Input
            border
            margin={10}
            placeholder="Question"
            onChange={this.handleQuestionChange}
            value={this.state.question}
            ref={this.answerInput}
          />
          <TextArea
            border
            margin={10}
            placeholder="Answer"
            onChange={this.handleAnswerChange}
            value={this.state.answer}
          />
          <Button onClick={this.submit}>Add</Button>
        </div>
      </form>
    );
  }
}

const matchDispatchToProps = dispatch => {
  return { addQuestion: question => dispatch(addQuestion(question)) };
};

const StyledAddQuestion = styled(AddQuestion)`
  box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  position: absolute;
  bottom: 0;
  left: 400px;
  width: calc(100vw - 420px);
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

export default connect(undefined, matchDispatchToProps)(StyledAddQuestion);
