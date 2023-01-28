import React from "react";
import Sidebar from "../utils/Sidebar";
import "./Dashboard.css";
function Dashboard() {
  return (
    <div className="main">
      <Sidebar />
      <div className="dashboard">
        <div className="dash_head">
          <h4>Dashboard</h4>
        </div>
        <div className="title">
          <h4>Welcome to Gokulam Store</h4>
          <p style={{ marginTop: "-15px" }}>
            By Entering below details you can create new Business
          </p>
        </div>
        <div className="selection">
          <div className="selection_sub">
            <h3>1</h3>
            <p>Select category</p>
          </div>
          <div className="selection_sub">
            <h3>2</h3>
            <p>Add Product Details</p>
          </div>
        </div>
        <div className="main_cat">
          <div className="category">
            <div className="cat">
              <label htmlFor="">Category</label>
              <select name="" id="">
                <option value="" disabled selected>
                  Choose Category
                </option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </div>
            <div className="cat">
              <label htmlFor="">Description</label>
              <select name="" id="">
                <option style={{ color: "grey" }} value="" disabled selected>
                  Choose Category
                </option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </div>
            <h3 className="plus">+</h3>
          </div>
          <div className="sub_category">
            <div className="cat">
              <label htmlFor="">Sub Category</label>
              <select name="" id="">
                <option value="" disabled selected>
                  Choose Category
                </option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </div>{" "}
            <div className="cat">
              <label htmlFor="">Description</label>
              <select name="" id="">
                <option value="" disabled selected>
                  Choose Category
                </option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </div>
            <h3 className="plus">+</h3>
          </div>
        </div>
        <div className="button_d">
          <button style={{ backgroundColor: "cyan" }}>Edit</button>
          <button style={{ backgroundColor: "red" }}>Delete</button>
          <button style={{ backgroundColor: "violet" }}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
