import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

const ProductCard = (props) => {
  const { grid, data } = props;

  let location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated hook

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24); // Number of items to display per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };  

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const navigateToProduct = (_id) => {
  //   navigate(`/products/${_id}`); // Use navigate function to navigate to the single product page
  // };

  return (
    <>
      {currentItems?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname === "/product" ? `gr-${grid}` : "col-3"
            }`}
          >
            <Link
            // to={`${
            //   location.pathname == "/products/:id"
            //   ? "/products/:id"
            //   : ":id"
            // }`}

            
            className="product-card position-relative">

              <div className="wishlist-icon position-absolute">

                <button
                  className="border-0 bg-transparent"
                  onClick={(e) => {
                    addToWish(item?._id);
                  }}
                >
                  <img src={wish} alt="wishlist" />
                </button>
              </div>
              <div className="product-image">
                <img
                  src={item?.images[0]}
                  className="img-fluid"
                  alt="product image"
                  width={160}
                />
                <img
                  src={watch2}
                  className="img-fluid"
                  alt="product image"
                  width={160}
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand_name}</h6>
                <h5 className="product-title">{item?.name}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={3}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                >
                  {item?.details}
                </p>
                <p className="price">{item?.costPrice}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                 
                  {/* <button className="border-0 bg-transparent">
                    <img onClick={() => navigateToProduct(item?._id)} src={view} alt="view" />
                  </button> */}
                  <button className="border-0 bg-transparent">
                    <img src={addcart} alt="addcart" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
      {data?.length > itemsPerPage && (
        <ul className="pagination">
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
            (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default ProductCard;
