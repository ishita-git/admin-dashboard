import React from "react";

import TableManager from '../../components/table/Table'

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Charts from "../../components/charts/Charts";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />

        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="charts">
          <Featured />
          <Charts title={'Last 6 Months Revenue'} aspect={2/1}/>
        </div>

        <div className="list-container">
          <div className="list-title">
            Latest Transaction
            <TableManager/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
