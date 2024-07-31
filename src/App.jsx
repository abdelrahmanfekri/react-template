import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Contact } from "./pages";
import "./App.css";
import LoginButton from "./components/Login";
import Logout from "./components/Logout";
import ApolloWrapper from "./context/ApolloWrapper";

function App() {
  return (
    <Router>
      <LoginButton />
      <Logout />
      <ApolloWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ApolloWrapper>
    </Router>
  );
}

export default App;
