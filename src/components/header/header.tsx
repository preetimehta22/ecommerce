import { alpha, InputBase } from "@mui/material";
import * as React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import * as HS from "./header.styled";
import { useRouter } from "next/router";
import Link from "next/link";

type HeaderProps = {
  searchString?: any;
  // setPrimarySearchQuery: (value: any) => void;
};

export const Header: React.FC<HeaderProps> = ({ searchString }) => {
  const [value, setValue] = React.useState(searchString);
  const router = useRouter();
  const search = (event: any): void => {
    console.log(event);
    if (event.key === "Enter") {
      router.push("/products?search=" + event.target.value);
    }
  };
  return (
    <HS.AppBarCustom position="fixed">
      <HS.HeaderWrapper>
        <HS.LogoWrapper>
          <Link href="/">
            <img src="/images/logo.svg" />
          </Link>

          <HS.SearchWrapper>
            <SearchIcon />
            <input
              onChange={(event): void => setValue(event.target.value)}
              value={value}
              onKeyUp={search}
              placeholder="Search for your favourite products..."
            />
          </HS.SearchWrapper>
        </HS.LogoWrapper>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a className="login">Login</a>
          <Link href={"/cart"}>
            <ShoppingCartIcon style={{ color: "#1f2323", marginLeft: '16px' }} />
          </Link>
        </div>
      </HS.HeaderWrapper>
    </HS.AppBarCustom>
  );
};
