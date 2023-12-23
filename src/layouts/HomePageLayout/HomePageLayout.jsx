import React from "react";
import "./HomePageLayout.css";
import Header from  "../../components/Header/Header";

const HomePageLayout = ({children  }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      
    </div>
  );
};

export default HomePageLayout;
