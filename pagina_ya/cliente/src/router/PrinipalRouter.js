import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
  import Home from "../pages/home/Home"
  import SubirServicio from "../pages/SubirServicio/SubirServicio"
  const RoutesPrincial =()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/subirservicio" element={<SubirServicio/>} />
            </Routes>
        </Router>
    )
  }

  export default RoutesPrincial 