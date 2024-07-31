import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ApolloWrapper from "./context/ApolloWrapper";
import {
  DashboardLayout,
  Customers,
  Orders,
  Products,
  BusinessInfo,
  NotFound,
} from "./pages";

function App() {
  return (
    <Router>
      <ApolloWrapper>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<BusinessInfo />} />
            <Route path="customers" element={<Customers />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products />} />
            <Route path="info" element={<BusinessInfo />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ApolloWrapper>
    </Router>
  );
}

export default App;
