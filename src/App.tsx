import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TablePagination } from "./components/_Table/TablePagination/TablePagination";
import { useApp } from "./useApp";

function App() {
  const { data, setCurrentPage, currentPage, count } = useApp();
  return (
    <div style={{ padding: "50px" }}>
      <TablePagination
        data={data}
        arrows={false}
        count={count}
        setCurrentPage={setCurrentPage}
        selected={currentPage}
      />
    </div>
  );
}

export default App;
