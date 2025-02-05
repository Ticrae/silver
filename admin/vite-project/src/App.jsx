import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/Login";
import axios from "axios";
import { url } from "./assets/assets";

const App = () => {
  const [token, setToken] = useState("");

  return (
    <main>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div>
          <Navbar />
          <hr />
          <div className="app-content">
            <Sidebar setToken={setToken} />
            <Routes>
              <Route path="/add" element={<Add url={url} />} />
              <Route path="/list" element={<List url={url} />} />
              <Route path="/orders" element={<Orders url={url} />} />
            </Routes>
          </div>
        </div>
      )}
    </main>
  );
};

export default App;
