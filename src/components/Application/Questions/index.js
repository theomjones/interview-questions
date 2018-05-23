import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { connect } from "react-redux";
import { dispatch } from "redux";

import {
  updateSearch,
  deleteQuestion,
  changeActive,
} from "../../../Store/actions";

import Input from "../../Input";
import Question from "./Question";

const Head = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
`;

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: props.questions,
      searchString: "",
    };
  }

  render() {
    return (
      <div className={this.props.className}>
        <Head>
          <Input
            autoFocus={true}
            value={this.props.searchValue}
            onChange={this.props.onSearchChange}
            placeholder="Search..."
          />
        </Head>
        {this.props.questions.length > 0 ? (
          this.props.questions.map(q => (
            <Question
              key={q.id}
              onClick={() => this.props.changeActiveQuestion(q)}
              title={q.question}
              onDelete={() => {
                const ok = confirm("Delete question?");
                if (ok) {
                  this.props.deleteQuestion(q.id);
                } else {
                  return;
                }
              }}
            />
          ))
        ) : (
          <p style={{ color: "#ddd", textAlign: "center" }}>No questions</p>
        )}
      </div>
    );
  }
}

const StyledQuestions = styled(Questions)`
  display: flex;
  height: 100vh;
  position: fixed;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  left: 0;
  top: 0;
  background: #222;
  box-sizing: border-box;
  width: 400px;
`;

const getVisibleQuestions = (questions, searchValue) => {
  return questions.filter(q =>
    q.question.toLowerCase().match(searchValue.toLowerCase()),
  );
};

const mapStateToProps = state => {
  return {
    questions: getVisibleQuestions(
      state.questions.questions,
      state.filters.searchValue,
    ),
    searchValue: state.filters.searchValue,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => {
      const val = event.target.value;
      if (val !== "" && val.split("")[0].match(/[a-z]|\d/gi)) {
        dispatch(updateSearch(`${val}`));
      } else if (val === "") {
        dispatch(updateSearch(""));
      }
    },
    deleteQuestion: id => {
      dispatch(deleteQuestion({ id }));
    },
    changeActiveQuestion: q => {
      dispatch(changeActive(q));
    },
  };
};

const VisibleQuestions = connect(mapStateToProps, mapDispatchToProps)(
  StyledQuestions,
);

export default VisibleQuestions;
