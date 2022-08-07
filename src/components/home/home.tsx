import * as React from "react";
import { Grid } from "@mui/material";
import Link from "next/link";
import { Header } from "../header/header";
import * as HS from "./home.styled";
import { categories } from "../../data/categories";
import { products } from "../../data/products";
import { useEffect, useState } from "react";
import { Footer } from "../footer/footer";

export const Home: React.FC = () => {
  const [topProducts, setTopProducts] = useState<any>([]);
  useEffect((): void => {
    const copy = [...products];
    const sort = copy.sort(function (a: any, b: any) {
      return b.Ratings - a.Ratings;
    });
    setTopProducts(sort.slice(0, 6));
  }, [products]);
  return (
    <>
      <Header />
      <HS.Wrapper>
        <div className="container">
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <h2>Incredible Prices on All Your Favorite Items</h2>
              <Link href={"/products"}>
                <button className="btn-primary">Shop now</button>
              </Link>
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
              <Link href={"/products?category=Phone&discount=true"}>
                <div className="home-image home-image-1">
                  <h3>Upto 30% Off</h3>
                  <p>Selected Smartphone Brands</p>
                  <button className="btn-secondary">Shop</button>
                </div>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link href={"/products?category=Headphone"}>
                <div className="home-image home-image-2">
                  <h3>Take Your Sound Anywhere</h3>
                  <p>Top Headphone Brands</p>
                  <button className="btn-secondary">Shop</button>
                </div>
              </Link>
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
                <Link href={"/products?category=" + category.name}>
                  <div className="category">
                    <img src={category.image} />
                    <h3>{category.name}</h3>
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </HS.CategoryWrapper>
      <HS.InnerWrapper>
        <div className="container">
          <h4>Top Selling Products</h4>
          <Grid container spacing={1}>
            {topProducts?.map((product: any) => (
              <Grid item xs={2}>
                <Link href={"/products/" + product.name + "/" + product.id}>
                  <div className="product">
                    <img
                      className="product-image"
                      width="100%"
                      src={product.image}
                    />
                    <p>{product.name}</p>
                    <div className="rating">
                      {" "}
                      {[...Array(parseInt(product.Ratings))].map((star) => (
                        <img
                          style={{ width: "14px", height: "14px" }}
                          height="14px"
                          width="14px"
                          src="./icons/star.png"
                        />
                      ))}
                    </div>
                    <label>${product.price}</label>
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </HS.InnerWrapper>
      <Footer/>
    </>
  );
};
