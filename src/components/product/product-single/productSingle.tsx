import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { products } from "../../../data/products";
import * as PS from "./productSingle.styled";
import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";

export const Product: React.FC = () => {
  const router = useRouter();
  const { name, id } = router.query;
  const [product, setProduct] = useState<any>();
  const [similarProducts, setSimilarProducts] = useState<any>();
  useEffect((): void => {
    // @ts-ignore
    const item = products.find((element) => element.id === parseInt(id));
    console.log(item);
    setProduct(item);
    const category = item?.Categories;
    let similar = products.filter((element) => element.Categories === category);
    similar = similar.sort(function (a: any, b: any) {
      return b.Ratings - a.Ratings;
    });
    setSimilarProducts(similar.slice(0, 6));
  }, [id]);

  const addTocart = (): void => {
    const cart: any = window.localStorage.getItem("cart");
    if (cart) {
      if (!JSON.parse(cart).includes(product)) {
        let copy = JSON.parse(cart);
        copy.push(product);
        localStorage.setItem("cart", JSON.stringify(copy));
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([product]));
    }
    router.push("/cart");
  };
  return (
    <>
      <Header />
      {product && (
        <div className="container">
          <PS.Wrapper>
            <Grid container spacing={2}>
              <Grid item xs={6} className="filters">
                <img
                  className="product-image"
                  width="100%"
                  src={product?.image}
                />
              </Grid>
              <Grid item xs={6} className="filters">
                <h3>{product?.name?.replaceAll("-", " ")}</h3>
                <p>Category: {product?.Categories}</p>
                {product &&
                  [...Array(parseInt(product?.Ratings))].map((star) => (
                    <img
                      height="14px"
                      width="14px"
                      src="../../icons/star.png"
                    />
                  ))}
                <button className="btn-primary" onClick={addTocart}>
                  Add to cart
                </button>
              </Grid>
            </Grid>
          </PS.Wrapper>
          <PS.SimilarProducts>
            <h4>You may also like</h4>
            <PS.InnerWrapper>
              <div className="container">
                <Grid container spacing={1}>
                  {similarProducts?.map((product: any) => (
                    <Grid item xs={2}>
                      <Link
                        href={"/products/" + product?.name + "/" + product?.id}
                      >
                        <div className="product">
                          <img
                            className="product-image"
                            width="100%"
                            src={product?.image}
                          />
                          <p>{product?.name}</p>
                          <div className="rating">
                            {" "}
                            {[...Array(parseInt(product?.Ratings))].map(
                              (star) => (
                                <img
                                  style={{ width: "14px", height: "14px" }}
                                  height="14px"
                                  width="14px"
                                  src="../../icons/star.png"
                                />
                              )
                            )}
                          </div>
                          <label>${product?.price}</label>
                        </div>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </PS.InnerWrapper>
          </PS.SimilarProducts>
        </div>
      )}
      <Footer />
    </>
  );
};
