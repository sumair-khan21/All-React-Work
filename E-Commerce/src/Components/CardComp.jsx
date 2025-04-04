import React from 'react'
import { useNavigate } from "react-router-dom";
// // this is the main page of my E-Commerce web


// // this is the main page of my E-Commerce web
const CardComp = ({ image, title, desc, id , price }) => {
    const navigate = useNavigate();
  return (
    <>
    <div className="card">
      <div className="container-image">
       <img src={image} alt="" style={{height:"auto"}} />
      </div>
      <div className="content">
        <div className="detail">
          <span>{title?.slice(0,6)}</span>
          <p>{price}</p>
          <button  onClick={() => {
            navigate(`/productDetails/${id}`);
          }}>Add to Cart</button>
        </div>
        <div className="product-image">
          <div className="box-image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CardComp
