import styled from "styled-components";

const TextArea = styled.textarea`
  border: ${props => (props.border ? "solid 1px #ddd" : "none")};
  margin: ${props => (props.margin ? `${props.margin}px 0` : 0)};
  appearance: none;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 8px 10px;
  display: block;
  flex: 1;
  width: 100%;
`;

export default TextArea;
