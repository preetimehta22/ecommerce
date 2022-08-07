import styled from "styled-components";

export const CartWrapper = styled.div`
  margin-top: 100px;
  div {
    width: 500px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 32px auto;
    border: 1px solid #ddd;
    align-items: center;
    a {
      color: red;
      cursor: pointer;
    }
    img {
      width: 100px;
      height: 100px;
    }
    p {
      margin: 8px 0;
    }
  }
`;
