import styled from "styled-components";

export const FiltersWrapper = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }
  h4 {
    font-size: 16px;
    font-weight: 500;
    margin: 32px 0 8px 0;
  }
  .flex-box {
    display: flex;
    justify-content: space-between;
    a {
      color: blue;
      cursor: pointer;
    }
  }
  button {
    width: calc(100% - 32px);
    margin: 32px 16px 16px 16px;
    height: 40px;
    background: #0fcdcf;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
`;
