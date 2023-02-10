import React from "react";
import About from "./components/about";
import Info from "./components/info";
import Interests from "./components/interest";
import Footer from "./components/footer";


export default function App(){
  return (
    <div className="app--content">
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  )
}
