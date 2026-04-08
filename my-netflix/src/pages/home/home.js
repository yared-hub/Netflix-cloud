import React from "react";
import Banner from "../../banner"; // This imports your Banner component

const Home = () => {
  return (
    <div className="home">
      {/* You can add your Navbar here later */}
      
      <Banner /> {/* This displays the Banner on your screen */}
      
      {/* You can add your Rows here later */}
    </div>
  );
};

export default Home;