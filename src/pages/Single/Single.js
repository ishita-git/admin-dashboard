import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import "./single.scss";
import Charts from "../../components/charts/Charts";
import TableManager from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit-btn">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                className="item-img"
                alt=""
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              />

              <div className="details">

                <h1 className="item-title"> Jane Doe</h1>
                <div className="item-details">
                  <span className="item-key">Email:</span>
                  <span className="item-value">janedoe@gmail.com</span>
                </div>

                <div className="item-details">
                  <span className="item-key">Phone:</span>
                  <span className="item-value">+1 2345 67 89</span>
                </div>

                <div className="item-details">
                  <span className="item-key">Address:</span>
                  <span className="item-value">Elton St. NewYork</span>
                </div>
                <div className="item-details">
                  <span className="item-key">Country:</span>
                  <span className="item-value">USA</span>
                </div>

              </div>
            </div>
          </div>
          <div className="right">
            <Charts aspect={3/1} title={"User spending (Last 6 Months)"}/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <TableManager/>
        </div>
      </div>
    </div>
  );
};

export default Single;
