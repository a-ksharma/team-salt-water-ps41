import React from "react";

import Navbar from "../PageComponents/Navbar.jsx";
import { FiArrowRight } from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import {Bar,Doughnut} from "react-chartjs-2";
ChartJS.register(ArcElement,Tooltip,Legend, ChartDataLabels);





const LandingPage=()=>{
  const navigate=useNavigate();
  return(
    <div className="home-container">
      <Navbar/>
      <div className="pg-style">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* img */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">

           Unlock the Power of the Oceans with AI
          </h1>
          <p className="primary-text">
           "An intelligent platform that unifies oceanographic, fisheries, and biodiversity data — transforming raw information into actionable insights." 
          </p>
          <button className="secondary-button" onClick={()=>{
            
            navigate("/query")}}>
            Ask Now<FiArrowRight/>

          </button>

        </div>
        <div className="home-image-container">
          <img src="src/assets/Whale.png" alt="no img"/>
        </div>

        {/* visualisation */}
        

      </div>
      </div>

      <div className="bar-wrapper" >
          <div className="bar">
            <Bar
            data={{
              labels:["Brackishwater","Freshwater","Marine"],
              datasets:[
                {label:"Environment Distribution",
                  data:[10,8,8],
                  
                },
              ]
            }}/>
            </div>
            <div >
              
              <h1 className="primary-heading">

           Visualizing Species Distribution
          </h1>
              <p className="primary-text">
                Our system converts raw marine datasets into insightful visualizations. The bar chart demonstrates how we track biodiversity and oceanographic changes to support research and sustainable decision-making.
              </p>
          
            </div>
</div>
<div className="home-image-container">
          <img src="src/assets/Crab.png" alt="no img"/>
        </div>
            <div className="Doughnut-wrapper">
          
          <div className="Doughnut">
            <Doughnut
            data={{
              labels:["Diadromous fishes","Crustaceans","Miscellaneous aquatic animal products","Molluscs","Miscellaneous aquatic animals","Aquatic plants","Marine Fishes","Freshwater fishes"],
              datasets:[
                {label:"Types of Fishes",
                  data:[14.81,14.81,7.41,11.11,11.11,11.11,14.81,14.81],
                },
              ]
            }}
            options={{
    plugins: {
      datalabels: {
        color: "#fff",
        formatter: (value, context) => {
          return value; // shows the number inside slice
        },
      },
      legend: {
        position: "right", // keeps labels outside chart
        labels: {
          usePointStyle: true,
        },
      },
    },
  }}
            />
          </div>
          <div>

              <h1 className="primary-heading">

           Understanding Marine Biodiversity
          </h1>
              <p className="primary-text">
                By visualizing species composition with this doughnut chart, our AI-driven system makes complex marine data easy to interpret and act upon for conservation and research purposes.
              </p>
            </div>
          

        </div>

    </div>
  )
}



export default LandingPage;