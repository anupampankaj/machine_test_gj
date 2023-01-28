import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="/images/logo.png"
          width={"40px"}
          alt=""
          className="img_logo"
        />
        <h4 className="heading">Kathiravan Tex</h4>
      </div>
      <div className="sidebar_contents">
        <h4>Category manager</h4>
        <h4>Inventory</h4>
        <h4>Orders</h4>
        <h4>Catalog uploads</h4>
        <h4>Payments</h4>
        <h4>Promotions</h4>
      </div>
      <div className="setting">
        <h4>Settings</h4>
      </div>
    </div>
  );
}

export default Sidebar;
