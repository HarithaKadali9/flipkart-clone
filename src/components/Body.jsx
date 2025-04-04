import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TopOffers from './TopOffers';
import Fashion from "./Fashion";
import Mobiles from './Mobiles';
const Body = () => {
  const totalcount = 0;

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold mb-4">Welcome to Online Shopping..!</h2>
      <TopOffers/>
      <Fashion/>
      <Mobiles/>
    </div>
  );
};

export default Body;
