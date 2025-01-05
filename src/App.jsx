import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;
