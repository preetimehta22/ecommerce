import { alpha, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
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
    const [cartItems, setCartItems] = useState<any>();
    const router = useRouter();
    const search = (event: any): void => {
        console.log(event);
        if (event.key === "Enter") {
            router.push("/products?search=" + event.target.value);
        }
    };
    useEffect((): void => {
        if (cartItems) {
            return;
        }
        if (typeof window !== undefined) {
            if (window.localStorage.getItem("cart")) {
                const localStorage = JSON.parse(
                    window.localStorage.getItem("cart") || ""
                );
                setCartItems(localStorage);
            }
        }
    });
    return (
        <HS.AppBarCustom position="fixed">
            <HS.HeaderWrapper>
                <HS.LogoWrapper>
                    <Link href="/">
                        <img src="/images/logo.svg" style={{ cursor: "pointer" }} />
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
                        <div className="cart-number">
                            <ShoppingCartIcon
                                style={{ color: "#1f2323", marginLeft: "16px" }}
                            />
                            {cartItems && cartItems?.length !== 0 && (
                                <span>{cartItems?.length}</span>
                            )}</div>
                    </Link>
                </div>
            </HS.HeaderWrapper>
        </HS.AppBarCustom>
    );
};
