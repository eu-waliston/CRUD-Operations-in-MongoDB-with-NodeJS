import React from "react";
import "./Dashboard.scss";
import Menu from "../Menu/Menu";
import AllCharacters from "../All-Characters/AllCharacters";

const Dashboard = () => {
  return (
    <div className="dash--component">
      <AllCharacters />
      <Menu />
    </div>
  );
};

export default Dashboard;
