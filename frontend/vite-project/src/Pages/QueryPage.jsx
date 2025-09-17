
import Navbar from "../PageComponents/Navbar.jsx";
import PromptBar from "../PageComponents/promptbar.jsx";
import React, { useState } from "react";
import fishnew from "../assets/fishnew.png";
import fishnewInverted from "../assets/fishnewinverted.png";


const QueryPage=()=> {
  

  
  return (
   <div className="home-container">
      <Navbar/>
      <div className="query-Img">
        <div className="home-image-container">
          <img src={fishnew} alt="no img"/>
        </div>
        
        <div className="ocean-theme" >
          <h1>Ask the Ocean AI</h1>
  <p>Type your question and let our intelligent system dive deep for insights.</p>
        </div>
        <div className="home-image-container">
          <img src={fishnewInverted} alt="no img"/>
        </div>

      </div>
      
      
      {/* searching option */}
      <PromptBar/>

    </div>
  )
}



export default QueryPage;

