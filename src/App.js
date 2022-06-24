import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import {
  Navbar,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Homepage,
} from "./component";
import "./App.css";
import { Space, Typography } from "antd";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/exchanges" element={<Exchanges />} />
            <Route
              exact
              path="/cryptocurrencies"
              element={<Cryptocurrencies />}
            />
            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route exact path="/news" element={<News />} />
          </Routes>
        </div>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
