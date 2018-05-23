import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Button = styled.button`
  padding: 4px 10px;
  border: none;
  border-radius: 3px;
  color: white;
  text-align: center;
  background: ${props => (props.primary ? "#425cf4" : "#000")};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  &:active {
    opacity: 1;
  }
`;

export default Button;
