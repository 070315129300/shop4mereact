import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

import Color from "../components/Color";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";


const Ourshirts = () => {
  return (
    <>
      <Meta title={"Our shirts"} />
      <BreadCrumb title="Our shirts" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            {/* Filter section */}
            <div className="filter-card mb-3">
              {/* Filter content */}
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              {/* Sort and grid options */}
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                {/* Product cards */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const SecondScreen = () => {
  const { stringValue } = useParams();

  return (
    <div>
      <h2>Selected Category: {stringValue}</h2>
    </div>
  );
};

export default SecondScreen;
