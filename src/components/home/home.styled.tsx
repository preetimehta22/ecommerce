import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 100px 0;
  background: url(./images/cover-bg.svg);
  background-size: cover;
  background-repeat: no-repeat;
  h2 {
    font-size: 60px;
    font-weight: 400;
    color: #fff;
    display: flex;
    margin-top: 100px;
    width: 500px;
    margin-bottom: 32px;
  }
  img {
    width: 100%;
  }
`;

export const OuterWrapper = styled.div`
  background: #f7f7f7;
  padding: 64px;
  h3 {
    font-size: 50px;
    color: #fff;
    font-weight: 400;
    width: 200px;
    margin: 24px 0;
  }
  p {
    font-size: 24px;
    color: #fff;
    font-weight: 400;
    margin-bottom: 24px;
  }
  .home-image {
    width: 100% !important;
    padding: 100px 0 !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    padding: 24px 32px 124px 32px !important;
    &.home-image-1 {
      background: url(./images/home-image-1.png);
    }
    &.home-image-2 {
      background: url(./images/home-image-2.png);
      h3 {
        width: 100%;
      }
    }
  }
`;

export const InnerWrapper = styled.div`
  background: #f7f7f7;
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

export const CategoryWrapper = styled.div`
  padding: 56px 0 72px 0;
  h4 {
    font-size: 24px;
    font-weight: 500;
    color: #1f2323;
    margin-top: 0;
  }
  .category {
    -webkit-box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
    -moz-box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
    box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
    padding: 12px;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    h3 {
      font-weight: 500;
    }
    img {
      margin: -12px -12px 4px -12px;
      width: calc(100% + 24px);
      border-radius: 4px 4px 0px 0px;
      height: 200px;
    }
  }
`;
