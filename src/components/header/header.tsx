import { alpha, InputBase } from "@mui/material";
import * as React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import * as HS from "./header.styled";

export const Header: React.FC = () => (
  <HS.AppBarCustom position="fixed">
    <HS.HeaderWrapper>
      <HS.LogoWrapper>
        <img src="./images/logo.svg" />
        <HS.SearchWrapper>
            <SearchIcon/>
          <input placeholder="Search for your favourite products..."/>
        </HS.SearchWrapper>
      </HS.LogoWrapper>
      <a className="login">Login</a>
    </HS.HeaderWrapper>
  </HS.AppBarCustom>
);
