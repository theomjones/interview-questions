import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: calc(100vw - 470px);
  padding: 10px;
  margin: 0 auto;
  height: calc(100vh - 400px);
  overflow: auto;
  margin-left: 450px;
`;

Container.propTypes = {
  children: PropTypes.any.isRequired
};

export default Container;
