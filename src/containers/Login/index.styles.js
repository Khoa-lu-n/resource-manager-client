import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper-form {
    width: 25%;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-top: 100px;

    form {
      padding: 5% 3%;
    }

    .form-label {
      font-weight: bold;
    }
  }

  .header {
    padding: 0 3%;
    border-bottom: 1px solid #ddd;
  }

  .footer {
    padding: 3%;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: flex-end;
  }
  .wrapper-logo {
    display: flex;
    justify-content: center;
    padding: 10% 0 5% 0;

    .logo {
      margin: 16px 10px;
      max-width: 40%;
    }
  }
`;
