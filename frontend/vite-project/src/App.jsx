import "./App.css";
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
import QueryPage from "./Pages/QueryPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}  />
        <Route path="/query" element={<QueryPage/>}  />
        <Route path="/about" element={<AboutPage/>}/>

      </Routes>

    </Router>
    
   
    
      
    
  )
}

export default App
