import React from "react";
import { Link } from "react-router-dom";
import "./allproducts.css";
import { useGetFlag } from 'vwo-fme-react-sdk';
import { useTrackEvent } from "vwo-fme-react-sdk";

//VWO Code
const options = {
  accountId: '1069944',
  sdkKey: 'cd911fff4deab44325692a12aa5c564e'
};
const userContext = {
  id: '1'
};

const Allproducts = ({ allProductsData, addToCart }) => {
  const { flag, isReady } = useGetFlag('key123', userContext);

// Use the flag object returned by useGetFlag to retrieve a specific variable
const variable1 = flag.getVariable("defaulttext", "Update all your needs");
// To get value of all variables as a list
const variables = flag.getVariables();
       // console.log("VWO Flag is running")
        // Check if the flag is enabled
        const isFeatureFlagEnabled = flag?.isEnabled();
        // Determine the application flow based on feature flag status
          if (isFeatureFlagEnabled) {
              // Your code when feature flag is enabled
              alert("VWO Flag is running")
          } else {
              // Your code when feature flag is disabled
              console.log("VWO Flag is not running")
          }
  

  return (
    <>
      <h1 className="page-header">All Products</h1>
      <div className="container grid3">
        {allProductsData.map((product, index) => {
          return (
            <div className="box" key={index}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{product.discount}% Off</span>
                  <img src={product.img} alt="product-image" />
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <Link to={`/all-products/${product.id}`}>
                    <h5>Click here for more Info</h5>
                  </Link>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{product.price}.00</h4>
                    <button
                      aria-label="Add to cart"
                      onClick={() => addToCart(product)}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Allproducts;
