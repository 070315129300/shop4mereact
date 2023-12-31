// import React from "react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
// import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import PromoCard from "../components/PromoCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllBanners } from "../features/banners/bannerSlice";
import { getAllProducts } from "../features/products/productSlice";
import { getAllPromo } from "../features/promo/promoSlice";
import { useNavigate } from 'react-router-dom';

// import { services } from "../utils/Data";

const Home = () => {
    const [grid, setGrid] = useState(4);
  const productState = useSelector((state) =>state?.product?.product?.data);

     const promoState = useSelector((state) =>state?.promo?.promo);

     const navigate=useNavigate;
     
  
     
  const dispatch = useDispatch();
  useEffect(() =>{
    getProducts();
     getPromo();
 
  },[])
 
  const getProducts = () => {
    dispatch(getAllProducts());
  }

   const getPromo = () => {
    dispatch(getAllPromo());
 }
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col">
            <div className="main-banner position-relative ">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>   
                       
          
        </div>
      </Container>
      {/*<Container class1="home-wrapper-2 py-5">*/}
      {/*  <div className="row">*/}
      {/*    <div className="col-12">*/}
      {/*      <div className="servies d-flex align-items-center justify-content-between">*/}
      {/*        {services?.map((i, j) => {*/}
      {/*          return (*/}
      {/*            <div className="d-flex align-items-center gap-15" key={j}>*/}
      {/*              <img src={i.image} alt="services" />*/}
      {/*              <div>*/}
      {/*                <h6>{i.title}</h6>*/}
      {/*                <p className="mb-0">{i.tagline}</p>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          );*/}
      {/*        })}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Container>*/}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">         
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
         
 <PromoCard 
                    grid={grid} 
                        data={promoState ? promoState.slice(0, 6) : []} />
            
          </div>      
        </div>
      </Container>

      {/* <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container> */}

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">

         <ProductCard 
                    grid={grid} 
                        data={productState ? productState.slice(0, 4) : []} />

                    {/* data={productState ? productState  : []} /> */}
                              

                 
        </div>
      </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      {/*<Container class1="blog-wrapper py-5 home-wrapper-2">*/}
      {/*  <div className="row">*/}
      {/*    <div className="col-12">*/}
      {/*      <h3 className="section-heading">Our Latest Blogs</h3>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="row">*/}
      {/*    <div className="col-3">*/}
      {/*      <BlogCard />*/}
      {/*    </div>*/}
      {/*    <div className="col-3">*/}
      {/*      <BlogCard />*/}
      {/*    </div>*/}
      {/*    <div className="col-3">*/}
      {/*      <BlogCard />*/}
      {/*    </div>*/}
      {/*    <div className="col-3">*/}
      {/*      <BlogCard />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Container>*/}
    </>
  );
};

export default Home;
