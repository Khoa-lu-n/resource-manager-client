import styled from "styled-components";

export default styled.div`
  .nav-pills .nav-link {
    border-radius: unset;
    &.active {
      background-color: #428bca;
    }
  }
  .container {
    max-width: "100%"; //This will make container to take screen width
  }

  .row {
    line-height: 4;
    background-color: #f4f7fe;
    &:active {
      background-color: #ffffff;
    }
    &:hover {
      background-color: #ebf3fe;
      cursor: pointer;
    }
    a {
      width: 100%;
      padding-left: 15px;
      text-decoration: none !important;
    }
  }
`;
