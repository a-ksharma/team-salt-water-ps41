
import Navbar from "../PageComponents/Navbar.jsx";
import PromptBar from "../PageComponents/promptbar.jsx";
import React, { useState } from "react";


const QueryPage=()=> {
  

  
  return (
   <div className="home-container">
      <Navbar/>
      <div className="query-Img">
        <div className="home-image-container">
          <img src="src/assets/fishnew.png" alt="no img"/>
        </div>
        
        <div className="ocean-theme" >
          <h1>Ask the Ocean AI</h1>
  <p>Type your question and let our intelligent system dive deep for insights.</p>
        </div>
        <div className="home-image-container">
          <img src="src/assets/fishnewinverted.png" alt="no img"/>
        </div>

      </div>
      
      
      {/* searching option */}
      <PromptBar/>

    </div>
  )
}



export default QueryPage;

