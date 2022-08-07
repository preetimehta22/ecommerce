type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  Categories: string;
  Ratings: string;
  discount: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "iphone-12-pro",
    price: 1000,
    Categories: "Phone",
    Ratings: "4",
    discount: true,
    image: "https://m.media-amazon.com/images/I/71umuN8XVeL.jpg",
  },
  {
    id: 2,
    name: "xiaomi-12-pro",
    price: 1000,
    Categories: "Phone",
    Ratings: "5",
    discount: true,
    image:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-112371/Xiaomi-12-Pro-Yoast-image-packshot-review.jpg",
  },
  {
    id: 3,
    name: "samsung-galaxy-z-flip-3",
    price: 800,
    Categories: "Phone",
    Ratings: "3",
    discount: true,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/levant/feature/160796035/levant-feature-galaxy-z-flip3-5g-521758899?$FB_TYPE_I_JPG$",
  },
  {
    id: 4,
    name: "vivo-x80-pro",
    price: 1000,
    Categories: "Phone",
    Ratings: "4",
    discount: false,
    image:
      "https://priceinall.com/wp-content/uploads/2022/04/Vivo-X80-Pro-black-color-600x600.jpg",
  },
  {
    id: 5,
    name: "oneplus-10-pro",
    price: 1000,
    Categories: "Phone",
    Ratings: "2",
    discount: true,
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled16.jpg",
  },
  {
    id: 6,
    name: "oppo-find-x5-pro",
    price: 1000,
    Categories: "Phone",
    Ratings: "4",
    discount: true,
    image:
      "https://htsg-store-gl.heytapimg.com/image-file/epb/202205/17/dxf7t50bqb8bvsRP.jpg?x-amz-process=image/resize,m_fill,h_960,w_1080",
  },
  {
    id: 7,
    name: "google-pixel-6a",
    price: 1000,
    Categories: "Phone",
    Ratings: "5",
    discount: true,
    image:
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Pixel_6a_3_QF1tY57.max-1000x1000.png",
  },
  {
    id: 8,
    name: "iphone-13",
    price: 1000,
    Categories: "Phone",
    Ratings: "4",
    discount: true,
    image:
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_hero_geo_09142021_inline.jpg.large.jpg",
  },
  {
    id: 9,
    name: "iphone-13-pro",
    price: 800,
    Categories: "Phone",
    Ratings: "1",
    discount: true,
    image:
      "https://www.notebookcheck.net/uploads/tx_nbc2/4_to_3_Teaser_Apple_iPhone_13_Pro.jpg",
  },
  {
    id: 10,
    name: "iphone-12",
    price: 1200,
    Categories: "Phone",
    Ratings: "2",
    discount: false,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000",
  },
  {
    id: 11,
    name: "dell-xps-13",
    price: 1000,
    Categories: "Laptop",
    Ratings: "5",
    discount: false,
    image:
      "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9310/general/xps-13_black_open-up-left-v2.jpg?fmt=pjpg&pscan=auto&scl=1&wid=3334&hei=2017&qlt=100,0&resMode=sharp2&size=3334,2017",
  },
  {
    id: 12,
    name: "hp-envy-x360-13",
    price: 1000,
    Categories: "Laptop",
    Ratings: "5",
    discount: false,
    image:
      "https://i.gadgets360cdn.com/products/large/hp-envy-x360-13-2020-front-1002x800-1587115895.jpg",
  },
  {
    id: 13,
    name: "lg-gram-17",
    price: 1000,
    Categories: "Laptop",
    Ratings: "5",
    discount: false,
    image: "https://m.media-amazon.com/images/I/617+w1RM96L._SL1500_.jpg",
  },
  {
    id: 14,
    name: "asus-chromebook-flip-cx5",
    price: 1000,
    Categories: "Laptop",
    Ratings: "5",
    discount: false,
    image:
      "https://i.gadgets360cdn.com/products/large/asus-chromebook-cx9-db-1-1200x800-1610601971.jpg",
  },
  {
    id: 15,
    name: "asus-rog-zephyrus-g14",
    price: 1000,
    Categories: "Laptop",
    Ratings: "5",
    discount: false,
    image: "https://m.media-amazon.com/images/I/81Nwu5Hp0jS._SL1500_.jpg",
  },
  {
    id: 16,
    name: "dell-xps-13",
    price: 1000,
    Categories: "Laptop",
    Ratings: "5",
    discount: false,
    image:
      "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9310/general/xps-13_black_open-up-left-v2.jpg?fmt=pjpg&pscan=auto&scl=1&wid=3334&hei=2017&qlt=100,0&resMode=sharp2&size=3334,2017",
  },
  {
    id: 17,
    name: "asus-zenbook-pro-duo-14",
    price: 1000,
    Categories: "Laptop",
    Ratings: "5",
    discount: false,
    image:
      "https://i.gadgets360cdn.com/large/asus_zenbook_pro_duo_15_oled_image_1618383686179.jpg",
  },
  {
    id: 18,
    name: "hp-spectre-x360-14",
    price: 1000,
    Categories: "Laptop",
    Ratings: "5",
    discount: false,
    image:
      "https://images.news18.com/ibnlive/uploads/2021/08/hp-spectre-x360-14-main.jpg",
  },
  {
    id: 19,
    name: "asus-rog-zephyrus-g15",
    price: 1000,
    Categories: "Laptop",
    Ratings: "5",
    discount: false,
    image: "https://m.media-amazon.com/images/I/81ef5sbZznL._AC_SL1500_.jpg",
  },
  {
    id: 20,
    name: "apple-macbook-air-m1",
    price: 1000,
    Categories: "Laptop",
    Ratings: "5",
    discount: false,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1633027804000",
  },
  {
    id: 21,
    name: "samsung-galaxy-buds-2",
    price: 1000,
    Categories: "Headphone",
    Ratings: "5",
    discount: true,
    image: "https://m.media-amazon.com/images/I/51X0kXtlBCL._SX679_.jpg",
  },
  {
    id: 22,
    name: "beats-powerbeats-pro",
    price: 1000,
    Categories: "Headphone",
    Ratings: "5",
    discount: true,
    image: "https://maplestore.in/wp-content/uploads/2020/10/MXYA2.jpeg",
  },
  {
    id: 23,
    name: "sony-wf-1000xm3",
    price: 1000,
    Categories: "Headphone",
    Ratings: "5",
    discount: false,
    image: "https://m.media-amazon.com/images/I/61zKkP36kDL._AC_SL1500_.jpg",
  },
  {
    id: 24,
    name: "apple-airpods-pro",
    price: 1000,
    Categories: "Headphone",
    Ratings: "5",
    discount: true,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1591634795000",
  },
  {
    id: 25,
    name: "bose-quietcomfort-earbuds",
    price: 1000,
    Categories: "Headphone",
    Ratings: "5",
    discount: false,
    image:
      "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/55/554/5123/401/2/797833000/797833000_1_2_720x928.webp",
  },
  {
    id: 26,
    name: "sony-wf-1000xm4",
    price: 1000,
    Categories: "Headphone",
    Ratings: "5",
    discount: true,
    image: "https://m.media-amazon.com/images/I/61G9yF+ZbEL._AC_SS450_.jpg",
  },
  {
    id: 27,
    name: "oneplus-nord-buds",
    price: 1000,
    Categories: "Headphone",
    Ratings: "5",
    discount: false,
    image: "https://m.media-amazon.com/images/I/514NPRZ1AQL._SL1500_.jpg",
  },
  {
    id: 28,
    name: "oppo-enco-x",
    price: 1000,
    Categories: "Headphone",
    Ratings: "5",
    discount: false,
    image:
      "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/o/p/oppo_enco_x-.jpg",
  },
  {
    id: 29,
    name: "jbl-c200si",
    price: 1000,
    Categories: "Headphone",
    Ratings: "5",
    discount: true,
    image: "https://m.media-amazon.com/images/I/61BEBOFwNFL._SL1500_.jpg",
  },
  {
    id: 30,
    name: "sony-mdr-xb55ap",
    price: 1000,
    Categories: "Headphone",
    Ratings: "5",
    discount: true,
    image:
      "https://cdn.shopify.com/s/files/1/0301/2263/9499/products/MDR-XB55AP-Black-06.jpg?v=1588847606",
  },
  {
    id: 31,
    name: "lenovo-tab-p12-pro-2022",
    price: 1000,
    Categories: "Tablet",
    Ratings: "5",
    discount: true,
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Lenovo_Tab_P12_Pro_Front_Back_Art_Markup.png",
  },
  {
    id: 32,
    name: "huawei-matepad-pro-11",
    price: 1000,
    Categories: "Tablet",
    Ratings: "5",
    discount: true,
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled3956.jpg",
  },
  {
    id: 33,
    name: "microsoft-surface-go-3",
    price: 1000,
    Categories: "Tablet",
    Ratings: "5",
    discount: true,
    image:
      "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWFOST?ver=9eed&q=90&m=6&h=722&w=1083&b=%23FFFFFFFF&l=f&o=t&aim=true",
  },
  {
    id: 34,
    name: "lenovo-tab-p11-pro",
    price: 1000,
    Categories: "Tablet",
    Ratings: "5",
    discount: true,
    image: "https://m.media-amazon.com/images/I/71QU1DXEjTL._SL1500_.jpg",
  },
  {
    id: 35,
    name: "samsung-galaxy-tab-s7-fe",
    price: 1000,
    Categories: "Tablet",
    Ratings: "5",
    discount: true,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/feature/138141664/in-feature-be-your-most-productive-with-samsung-dex-458153928?$FB_TYPE_A_MO_JPG$",
  },
  {
    id: 36,
    name: "lenovo-yoga-tab-11",
    price: 1000,
    Categories: "Tablet",
    Ratings: "5",
    discount: true,
    image: "https://m.media-amazon.com/images/I/61vlLU-xmLL._AC_SS450_.jpg",
  },
  {
    id: 37,
    name: "apple-ipad-pro",
    price: 1000,
    Categories: "Tablet",
    Ratings: "5",
    discount: true,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-11-select-202104_GEO_IN_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617865122000",
  },
  {
    id: 38,
    name: "apple-ipad-air-2022-wi-fi-cellular",
    price: 1000,
    Categories: "Tablet",
    Ratings: "5",
    discount: true,
    image: "https://m.media-amazon.com/images/I/719Lk3CuLzL._SL1500_.jpg",
  },
  {
    id: 39,
    name: "samsung-galaxy-tab-s8-ultra-5g",
    price: 1000,
    Categories: "Tablet",
    Ratings: "5",
    discount: true,
    image:
      "https://images.samsung.com/in/galaxy-tab-s8/feature/galaxy-tab-s8-ultra-graphite-kv-mo.jpg",
  },
  {
    id: 40,
    name: "apple-ipad-mini-2021-wi-fi-cellular",
    price: 1000,
    Categories: "Tablet",
    Ratings: "5",
    discount: true,
    image:
      "https://i.gadgets360cdn.com/products/large/iPad-mini-2021-800x717-1631651727.jpg",
  },
];
