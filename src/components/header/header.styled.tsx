import styled from "styled-components";
import { AppBar } from "@mui/material";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  justify-content: space-between;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .login {
    width: auto;
    height: 40px;
    background: #0fcdd0;
    border-radius: 100px;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 40px;
    color: #ffffff;
    padding: 0 24px;
    cursor: pointer;
  }
`;

export const AppBarCustom = styled(AppBar)`
  padding: 12px 120px;
  background: #fff !important;
  border-bottom: 1px solid rgba(214, 214, 220, 0.7);
  box-shadow: none !important;
`;

export const SearchWrapper = styled.div`
  input {
    width: 300px;
    height: 40px;
    padding: 8px 16px 8px 40px;
    color: #5a5a5a;
    border: 1px solid #c2c2c2;
    border-radius: 6px;
    outline: 0;
    position: relative;
  }
  svg {
    color: #757575;
    position: absolute;
    margin-top: 8px;
    margin-left: 8px;
    z-index: 1;
  }
`;
