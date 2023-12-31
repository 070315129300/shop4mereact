import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container"; 
import { useDispatch, useSelector } from "react-redux";
// import { getUserProductWishlist } from "../features/user/userSlice";


// const Wishlist = () => {
  
//   const dispatch = useDispatch();
//   useEffect(() =>{
//     getWishlistFromDb();
//   },[])
//   const getWishlistFromDb = () => {
//     dispatch(getUserProductWishlist());
//   } 
//   const wishlistState=useSelector(state=>state.auth.wishlist.wishlist) 

//   return ( 
//     <>
//       <Meta title={"Wishlist"} />
//       <BreadCrumb title="Wishlist" />
//       <Container class1="wishlist-wrapper home-wrapper-2 py-5">
//         <div className="row">
//           {
//             wishlistState?.map((item, index)=> {
//               return( 
//           <div className="col-3" key={index}>
//             <div className="wishlist-card position-relative">
//               <img
//                 src="images/cross.svg"
//                 alt="cross"
//                 className="position-absolute cross img-fluid"
//               />
//               <div className="wishlist-card-image">
//                 <img
//                   src="images/watch.jpg"
//                   className="img-fluid w-100"
//                   alt="watch"
//                 />
//               </div>
//               <div className="py-3 px-3">
//                 <h5 className="title">
//                   Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
//                 </h5>
//                 <h6 className="price">$ 100</h6>
//               </div>
//             </div>
//           </div>
//               )
//             })
//           }
          
          
//         </div>
//       </Container>
//     </>
//   );
// };

// export default Wishlist;


const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          
          
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
