import React from "react";
import Navbar from "./components/header";
import Personal from "./components/profile";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="container">
        <div>
          <Navbar />
          <Personal />
        </div>
        <Footer />
      </div>
    </>
  );
}
