import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";

function App() {
  const [store, setStore] = useState(""); 

  return (
    <div>
      
      <div>
        <h3>Stored Data:</h3>
        <div>{JSON.stringify(store)}</div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<Login regDataLogin={store} />} />
            <Route path="/registration" element={<Registration regData={setStore} />} />
            <Route path="/dash" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;