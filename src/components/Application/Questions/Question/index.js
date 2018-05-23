import React from "react";

import styled from "styled-components";

const QuestionLink = styled.div`
  margin: 5px 0;
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const DeleteButton = ({ onClick, className }) => (
  <div className={className} onClick={onClick}>
    &times;
  </div>
);
const StyledDeleteButton = styled(DeleteButton)`
  font-size: 150%;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export default ({ children, title, onDelete, onClick }) => (
  <Wrapper onClick={onClick}>
    <QuestionLink>{title}</QuestionLink>
    <StyledDeleteButton onClick={onDelete} />
  </Wrapper>
);
