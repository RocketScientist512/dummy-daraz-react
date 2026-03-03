import React from "react";
import Allproducts from "../../components/Allproducts/Allproducts";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { VWOProvider } from 'vwo-fme-react-sdk';

//VWO Code
      const options = {
        accountId: '1069944',
        sdkKey: 'cd911fff4deab44325692a12aa5c564e'
      };
      const userContext = {
        id: '1'
      };
        // Retrieve the flag using the feature key
      

const Allproductspage = ({ cartItems, allProductsData, addToCart }) => {
  return (
    <>
      <VWOProvider config={options} context={userContext}>
      <Header cartItems={cartItems} />
      <Allproducts allProductsData={allProductsData} addToCart={addToCart} />
      <Footer />
      </VWOProvider>
    </>
  );
};

export default Allproductspage;
