import styled from "styled-components";

export const Wrapper = styled.div`
  -webkit-box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
  -moz-box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
  box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  background: #fff;
  margin: 100px auto;
  h3 {
    font-size: 38px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 32px 0 8px 0;
  }
  .product-image {
    width: 100%;
  }
  .btn-primary {
    display: block;
    margin: 32px 0;
  }
`;

export const InnerWrapper = styled.div`
  padding: 56px 0 72px 0;
  h4 {
    font-size: 24px;
    font-weight: 500;
    color: #1f2323;
    margin-top: 0;
  }
  .product {
    -webkit-box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
    -moz-box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
    box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
    background: #fff;
    p {
      margin: 8px 0px;
      color: #1f2323;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    label {
      color: #6608ff;
      font-weight: 400;
      font-size: 24px;
    }
    .product-image {
      margin: -12px -12px 4px -12px;
      width: calc(100% + 24px);
      border-radius: 4px 4px 0px 0px;
      height: 155px;
    }
  }
`;

export const SimilarProducts = styled.div`
  h4 {
    font-size: 24px;
    font-weight: 500;
    color: #1f2323;
    margin-top: 0;
  }
`;
