import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "../../header/header";
import { Filters } from "./filters/filters";
import * as PS from "./productsList.styled";
import { products } from "../../../data/products";
import { Footer } from "../../footer/footer";

export const ProductsList: React.FC = () => {
  const router = useRouter();
  const searchString: any = router.query?.search;
  const category = router.query?.category;
  const discount = router.query?.discount;
  const [filters, setFilters] = useState<any>();
  const [productsList, setProductsList] = useState(products);
  const [productsListAfterFilters, setProductsListAfterFilters] =
    useState(products);

  useEffect(() => {
    if (!filters) {
      return;
    }
    let copy = [...productsList];
    Object.keys(filters).map((filter) => {
      if (filters[filter]?.length === 0) {
        return;
      }
      copy = copy.filter((product) =>
        filters[filter].includes((product as any)[filter])
      );
    });
    setProductsListAfterFilters(copy);
  }, [filters]);

  useEffect(() => {
      if (searchString) {
        let copy = [...productsList];
        copy = copy.filter(product => product.name.includes(searchString))
        setProductsListAfterFilters(copy);
      }
      if (discount) {
        let copy = [...productsList];
        copy = copy.filter(product => product.discount === true)
        setProductsListAfterFilters(copy);
      }
  }, [searchString, discount])
  return (
    <>
      <Header searchString={searchString} />
      <PS.WrapperContainer className="container">
        <Grid container spacing={2}>
          <Grid item xs={3} className="filters">
            <Filters
              setFilters={(value): void => setFilters(value)}
              category={category}
            />
          </Grid>
          <Grid item xs={9} style={{ padding: " 0 32px" }}>
            <PS.InnerWrapper>
              <Grid container spacing={2}>
                {productsListAfterFilters?.map((product) => (
                  <Grid item xs={3}>
                    <Link href={"products/" + product.name + "/" + product.id}>
                      <div className="product">
                        <img
                          className="product-image"
                          width="100%"
                          src={product.image}
                        />
                        <p>{product.name}</p>
                        <p className="rating">
                          {" "}
                          {[...Array(parseInt(product.Ratings))].map((star) => (
                            <img
                              height="14px"
                              width="14px"
                              src="./icons/star.png"
                            />
                          ))}
                        </p>
                        <label>${product.price}</label>
                      </div>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </PS.InnerWrapper>
          </Grid>
        </Grid>
      </PS.WrapperContainer>
      <Footer/>
    </>
  );
};
