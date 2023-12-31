import React from "react";

import Datatable from "../../components/datatable/Datatable";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import "./list.scss";


const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list-container">
        <Navbar />
        <Datatable/>
      </div>
    </div>
  );
};

export default List;
