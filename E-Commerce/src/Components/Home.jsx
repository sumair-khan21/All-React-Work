import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComp from './CardComp';

const Home = () => {
    const [productData, setProductData] = useState(null);
    useEffect(() => {
        getData();
      }, []);
    const getData = async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          console.log(response.data, "response");
          setProductData(response.data);
        } catch (error) {
          console.log("error", error);
        }
      };
    
      console.log("productData", productData);
  return (
    
   <>
    <div className="flex  gap-3 flex-wrap p-1 m-1">
      {productData?.map((product, index) => {
        console.log(product, "product map");
        return (
          <CardComp
            title={product.title}
            desc={product.description}
            image={product.image}
            price={product.price}
            id={product.id}
          />
        );
      })}

      <CardComp />
    </div>
   </>
  )
}

export default Home
