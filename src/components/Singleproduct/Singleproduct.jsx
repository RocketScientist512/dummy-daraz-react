import React from "react";
import { useParams } from "react-router-dom";
import "./singleproduct.css";
import mixpanel from "mixpanel-browser";
import { useTrackEvent } from "vwo-fme-react-sdk";

function handleClick(product) {
  mixpanel.track('Add to Cart', {
    'event': 'Add to Cart',
    'product': product.name,
    'price': product.price
  })
  console.log("mixpanel event executed");
    
        // Pass the event and relevant data
        useTrackEvent('add_to_cart', {
          product_id: "7",
          product_name: product.name,
          price: product.price,
          category: "apparel"
        });
    console.log("VWO Event Triggered");
}

// const Singleproduct = ({ allProductsData, addToCart }) => {
//   const {trackEvent, isReady} = useTrackEvent();
//   if (isReady) {
//     console.log("tracking event 1234 ");
//     trackEvent("automationEvent1772427020982");
//   }

//   const handleAddToCart = () => {
//     if (isReady) {
//       console.log("tracking event 5678");
//       trackEvent("automationEvent1772427020982");
//     }
//   };
// }

const Singleproduct = ({ allProductsData, addToCart }) => {
  const { trackEvent, isReady } = useTrackEvent();
  if(isReady){
    useTrackEvent('pageview');
    console.log("VWO Page view executed");
  }
  let id = useParams();
  return (
    <>
      {allProductsData.map((product, index) => {
        if (product.id == id.id) {
          return (
            <div key={index}>
              <section className="single-product">
                <div className="heading-prod">{product.name}</div>
                <div className="single-product-flex">
                  <div className="single-img">
                    <img src={product.img} alt="" />
                    <div className="price">{product.price}.00$</div>
                  </div>
                  <div className="description">
                    {product.desc}
                    <div className="rate-single">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div>
                      Currently it's {product.discount}% Off but not for long
                    </div>
                  </div>
                  <button
                    aria-label="Add to cart"
                    className="cart-add-btn"
                    onClick={()=>handleClick(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </section>
            </div>
          );
        }
      })}
    </>
  );
};
export default Singleproduct;
