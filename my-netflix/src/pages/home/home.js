import React from "react";
import Nav from "../../Nav";       // ናቭባሩን ጠራነው
import Banner from "../../banner"; // ባነሩን ጠራነው

const Home = () => {
  return (
    <div className="home">
      <Nav />    {/* ናቭባሩን ከላይ አደረግነው */}
      <Banner /> {/* ባነሩን ከታች አደረግነው */}
    </div>
  );
};

export default Home;