import styled from "styled-components";

export default styled.div`
  .form {
    width: 30%;
    input {
      text-align: center;
    }
  }
  .button-check, h4 {
    // text-align: center;
    display: ${props => props.isDisplay ? "" : "none"}}
  }
  .resource-statistic {
    display: ${props => !props.isDisplay ? "" : "none"}}
  }
`;
