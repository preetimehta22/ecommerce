import styled from "styled-components";

export const WrapperContainer = styled.div`
  margin: 120px auto;
  .filters {
    -webkit-box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
    -moz-box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
    box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
    padding: 24px;
    border-radius: 4px;
  }
`;

export const InnerWrapper = styled.div`
  .product {
    -webkit-box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
    -moz-box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
    box-shadow: 1px 1px 4px 0px rgba(232, 232, 232, 1);
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
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
