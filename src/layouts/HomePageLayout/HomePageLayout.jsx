import React from "react";
import "./HomePageLayout.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomePageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default HomePageLayout;
