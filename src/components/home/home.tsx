import * as React from "react";
import { Grid } from "@mui/material";
import { Header } from "../header/header";
import * as HS from "./home.styled";
import { categories } from "../../data/categories";
import { products } from "../../data/products";

export const Home: React.FC = () => (
  <>
    <Header />
    <HS.Wrapper>
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <h2>Incredible Prices on All Your Favorite Items</h2>
            <button className="btn-primary">Shop now</button>
          </Grid>
          <Grid item xs={5}>
            <img src="./images/cover.png" />
          </Grid>
        </Grid>
      </div>
    </HS.Wrapper>
    <HS.OuterWrapper>
      <div className="container">
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <div className="home-image home-image-1">
              <h3>Upto 30% Off</h3>
              <p>Selected Smartphone Brands</p>
              <button className="btn-secondary">Shop</button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="home-image home-image-2">
              <h3>Take Your Sound Anywhere</h3>
              <p>Top Headphone Brands</p>
              <button className="btn-secondary">Shop</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </HS.OuterWrapper>
    <HS.CategoryWrapper>
      <div className="container">
        <h4>Shop By Category</h4>
        <Grid container spacing={3}>
          {categories?.map((category) => (
            <Grid item xs={3}>
              <div className="category">
                <img src={category.image} />
                <h3>{category.name}</h3>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </HS.CategoryWrapper>
    <HS.InnerWrapper>
      <div className="container">
        <h4>Top Selling Products</h4>
        <Grid container spacing={1}>
          {products?.map((product) => (
            <Grid item xs={2}>
              <div className="product">
                <img
                  width="100%"
                  src={product.image}
                />
                <p>{product.name}</p>
                <label>${product.price}</label>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </HS.InnerWrapper>
    <HS.Footer>
      <img src="./images/logo.svg" />
    </HS.Footer>
  </>
);
