import React, { useState } from "react";
import { useSelector } from 'react-redux'

const Header = () => {
          const {counter} = useSelector((state)=>state.counterReducer);
  console.log("counter", counter);
  return  <div>counter :{counter}</div>;
  
}

export default Header